import React, { useState, useEffect } from 'react';
import { View, FlatList,navigation } from 'react-native';
import { fetchWishList } from '../axios/wishlist';
import Container from '../components/common/Container';
import AsyncStorage from '@react-native-async-storage/async-storage';
import WishListBox from '../components/common/WishListBox';
import { BackGroundColor } from '../constants/Color';
import HomeLogo from '../components/home/HomeLogo';

const WishList = ({navigation}) => {
  const [wishList, setWishList] = useState([]);
  const [likedIds, setLikedIds] = useState([]);

  useEffect(() => {
    const getWishList = async () => {
      let ids = await AsyncStorage.getItem('likedIds');
      ids = ids ? ids.split(',') : [];

      setLikedIds(ids);

      const response = await fetchWishList(ids);
      setWishList(response);
    };

    getWishList();
  }, []);

  const onLikeChanged  = (liked, restaurantId) => {
    if (!liked) {
      setWishList(prevWishList => prevWishList.filter(item => item.id !== restaurantId));
    }
  };

  const renderWish = ({ item }) => (
    <WishListBox
      name={item.name}
      distance={item.distance}
      address={item.address}
      restaurantId={item.id}
      categories={item.categories}
        coords={item.coords}
      liked={likedIds.includes(item.id)}
      onLikeChanged={onLikeChanged}
      navigation={navigation}
    />
  );

return (
  <View style={{ backgroundColor: BackGroundColor, flex: 1 }}>
    <View style={{ flex: 1.65, alignItems: 'center', justifyContent: 'center'}}>
      <HomeLogo navigation={navigation} />
    </View>
    <View style={{ flex: 3 }}>
      <FlatList
        data={wishList}
        renderItem={renderWish}
        keyExtractor={(item) => item.id}
        style={{  }}
      />
    </View>
  </View>
);

};

export default WishList;
