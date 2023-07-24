import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList } from 'react-native';
import Container from '../components/common/Container';
import RandomCard from '../components/randomBox/RandomCard';
import { getRandomRestaurant } from '../axios/Random';
import { useRecoilState, useRecoilValue } from 'recoil';
import { distanceLimitState, xState, yState } from '../atom';
import HomeLogo from '../components/home/HomeLogo';

const { width: viewportWidth } = Dimensions.get('window');
const itemWidth = viewportWidth - 60;
const padding = viewportWidth - itemWidth;

const RandomBox = ({ route, navigation }) => {
  const { category } = route.params;

  const [x, setX] = useRecoilState(xState);
  const [y, setY] = useRecoilState(yState);
  const distanceLimit = useRecoilValue(distanceLimitState);
  const [data, setData] = useState([]);
  const [details, setDetails] = useState([]);
  const seed = 1;

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    getRandomRestaurant(seed, category, x, y, distanceLimit, 0, 10).then(
      (res) => {
        const updatedData = res.data.documents.map((item) => ({
          ...item,
          detail: false,
        }));
        setData(updatedData);
        setDetails(new Array(updatedData.length).fill(false));
      }
    );
  }, []);

  const toggleDetail = (index) => {
    const newDetails = [...details];
    newDetails[index] = !newDetails[index];
    setDetails(newDetails);
  };

  const _renderItem = ({ item, index }) => (
    <View style={{ width: itemWidth }}>
      <RandomCard
        key={index}
        name={item.name}
        distance={item.distance}
        address={item.address}
        menus={item.menus}
        coords={item.coords}
        detail={details[index]}
        onPress={() => toggleDetail(index)}
      />
    </View>
  );

  return (
    <Container>
      <HomeLogo navigation={navigation} />
      <FlatList
        data={data}
        renderItem={_renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={itemWidth}
        snapToAlignment="start"
        decelerationRate="fast"
        pagingEnabled
        contentContainerStyle={{
          paddingHorizontal: padding / 2,
        }}
        onMomentumScrollEnd={() => setDetails(new Array(data.length).fill(false))}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  swiper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  swiperButtonText: {
    fontSize: 30,
    color: 'black',
  },
});

export default RandomBox;
