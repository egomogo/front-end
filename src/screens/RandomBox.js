import { useState, useEffect, useRef } from 'react';
import { View, Animated, Dimensions } from 'react-native';
import Container from '../components/common/Container';
import RandomCard from '../components/randomBox/RandomCard';
import Toast from '../components/common/Toast';
import { NULL_DATA } from '../constants/Error';
import { getDetailRestaurant, getRandomRestaurant } from '../axios/restaurant';
import { useRecoilState, useRecoilValue } from 'recoil';
import { distanceLimitState, kakaoShopIdState, xState, yState } from '../atom';
import HomeLogo from '../components/home/HomeLogo';

const { width: viewportWidth } = Dimensions.get('window');
const itemWidth = viewportWidth / 1.3;
const cardMargin = 25;

const RandomBox = ({ route, navigation }) => {
  const { category } = route.params;

  const x = useRecoilValue(xState);
  const y = useRecoilValue(yState);
  const distanceLimit = useRecoilValue(distanceLimitState);
  const [data, setData] = useState([]);
  const [details, setDetails] = useState([]);
  const MAX_NUM = 100000;
  const MIN_NUM = 1;
  const [kakaoShopId, setkakaoShopId] = useRecoilState(kakaoShopIdState);
  const seed = Math.floor(Math.random() * (MAX_NUM - MIN_NUM) + MIN_NUM);

  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [page, setPage] = useState(0);

  const fetchRestaurants = (page) => {
    getRandomRestaurant(seed, category, x, y, distanceLimit, page, 10).then(
      (res) => {
        if (res.data.documents.length === 0) {
          Toast({ text: NULL_DATA });
        }
        const updatedData = res.data.documents.map((item) => ({
          ...item,
          detail: false,
        }));

        setData(data.concat(updatedData));
        setDetails(new Array(data.length + updatedData.length).fill(false));
      }
    );
  };

  useEffect(() => {
    fetchRestaurants(page);
  }, []);

  useEffect(() => {
    const listener = scrollX.addListener(({ value }) => {
      const newIndex = Math.round(value / (itemWidth + cardMargin));
      if (newIndex !== currentIndex) {
        setDetails(new Array(data.length).fill(false));
        setCurrentIndex(newIndex);
      }

      if (newIndex === data.length - 1) {
        setPage(page + 1);
        fetchRestaurants(page + 1);
      }
    });

    return () => {
      scrollX.removeListener(listener);
    };
  }, [currentIndex, data.length, page]);
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
              width: itemWidth + cardMargin,
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
              navigation={navigation}
              onPress={() => {
                toggleDetail(index);
                getDetailRestaurant(item.id).then((res) => {
                  setkakaoShopId(res.data.kakaoShopId);
                });
              }}
            />
          </View>
        ))}
      </Animated.ScrollView>
    </Container>
  );
};

export default RandomBox;
