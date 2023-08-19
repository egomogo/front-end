import { fetchWishList } from '../axios/wishlist';
import { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import WishListBox from '../components/common/WishListBox';

const WishList = () => {
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    const getWishList = async () => {
      const likedIds = await AsyncStorage.getItem('likedIds');
      console.log("Liked ID: ", likedIds);

      if (likedIds) {
        const ids = likedIds.split(',');
        const response = await fetchWishList(ids);
        console.log("Response: ", response);
        setWishList(response.data);
      }
    };

    getWishList();
  }, []);

  const renderWish = ({ item }) => {
    return (
      <WishListBox
        name={item.name}
        distance={item.distance}
        address={item.address}
        menus={item.menus}
        coords={item.coords}
        detail={item.detail}
        onPress={() => console.log('Item pressed')}
        restaurantId={item.restaurantId}
      />
    );
  };

  return (
    <FlatList
      data={wishList}
      renderItem={renderWish}
      keyExtractor={(item, index) => index.toString()}
      style={{ backgroundColor: 'red' }} // 임시 배경색
    />
  );
};

export default WishList;
