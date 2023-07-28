import React, { useState, useEffect, useRef } from 'react';
import { View, Animated, Dimensions } from 'react-native';
import Container from '../components/common/Container';
import RandomCard from '../components/randomBox/RandomCard';
import Toast from '../components/common/Toast';
import { NULL_DATA } from '../constants/Error';
import { useState, useEffect } from 'react';
import { getRandomRestaurant } from '../axios/Random';
import { useRecoilState, useRecoilValue } from 'recoil';
import { distanceLimitState, xState, yState } from '../atom';
import HomeLogo from '../components/home/HomeLogo';

const { width: viewportWidth } = Dimensions.get('window');
const itemWidth = viewportWidth / 1.3;
const cardMargin = 25;

const RandomBox = ({ route, navigation }) => {
  const { category } = route.params;

  const [x, setX] = useRecoilState(xState);
  const [y, setY] = useRecoilState(yState);
  const distanceLimit = useRecoilValue(distanceLimitState);
  const [data, setData] = useState([]);
  const [details, setDetails] = useState([]);
  const MAX_NUM = 100000;
  const MIN_NUM = 1;
  const seed = Math.floor(Math.random() * (MAX_NUM - MIN_NUM) + MIN_NUM);

  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    getRandomRestaurant(seed, category, x, y, distanceLimit, 0, 10).then(
      (res) => {
        if (res.data.documents.length === 0) {
          Toast({
            text: NULL_DATA,
          });
        }
        
        const updatedData = res.data.documents.map((item) => ({
          ...item,
          detail: false,
        }));
        setData(updatedData);
        setDetails(new Array(updatedData.length).fill(false));
      }
    );
  }, []);

  useEffect(() => {
    const listener = scrollX.addListener(({ value }) => {
      const newIndex = Math.round(value / (itemWidth + cardMargin));
      if (newIndex !== currentIndex) {
        setDetails(new Array(data.length).fill(false));
        setCurrentIndex(newIndex);
      }
    });

    return () => {
      scrollX.removeListener(listener);
    };
  }, [currentIndex, data.length]);

  const toggleDetail = (index) => {
    const newDetails = [...details];
    newDetails[index] = !newDetails[index];
    setDetails(newDetails);
  };

  return (
    <Container>
      <HomeLogo navigation={navigation} />
      <Animated.ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        snapToInterval={itemWidth + cardMargin}
        snapToAlignment={'start'}
        decelerationRate={0}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          }
        )}
        contentContainerStyle={{
          paddingHorizontal: (viewportWidth - itemWidth) / 2.2,
          paddingLeft: (viewportWidth - itemWidth) / 8 + cardMargin,
        }}
      >
        {data.map((item, index) => (
          <View
            style={{
              width: itemWidth + (index === 0 ? cardMargin : cardMargin),
            }}
            key={index}
          >
            <RandomCard
              name={item.name}
              distance={item.distance}
              address={item.address}
              menus={item.menus}
              coords={item.coords}
              detail={details[index]}
              onPress={() => toggleDetail(index)}
            />
          </View>
        ))}
      </Animated.ScrollView>
    </Container>
  );
};

export default RandomBox;
