import { Text, StyleSheet, Alert } from 'react-native';
import Swiper from 'react-native-swiper';
import Container from '../components/common/Container';
import RandomCard from '../components/randomBox/RandomCard';
import Toast from '../components/common/Toast';
import { NULL_DATA } from '../constants/Error';
import { useState, useEffect } from 'react';
import { getRandomRestaurant } from '../axios/Random';
import { useRecoilState, useRecoilValue } from 'recoil';
import { distanceLimitState, xState, yState } from '../atom';

const RandomBox = ({ route }) => {
  const { category } = route.params;

  const [detail, setDetail] = useState(false);
  const [x, setX] = useRecoilState(xState);
  const [y, setY] = useRecoilState(yState);
  const distanceLimit = useRecoilValue(distanceLimitState);
  const [data, setData] = useState([]);
  const number = 0;
  const size = 10;
  const MAX_NUM = 100000;
  const MIN_NUM = 1;

  const seed = Math.floor(Math.random() * (MAX_NUM - MIN_NUM) + MIN_NUM);

  useEffect(() => {
    getRandomRestaurant(seed, category, x, y, distanceLimit, number, size).then(
      (res) => {
        if (res.data.documents.length === 0) {
          Toast({
            text: NULL_DATA,
          });
        }
        setData(res.data.documents);
        console.log(res.data.meta);
      }
    );
  }, []);
  return (
    <Container>
      {!detail && (
        <Text style={styles.randomBoxMainText}>소소식탁 명지대점 드가좌</Text>
      )}
      <Swiper
        style={styles.swiper}
        showsButtons={true}
        onIndexChanged={(index) => {
          if (index === 0) Alert.alert('추천다시하실?');
          console.log(index);
        }}
        nextButton={<Text style={styles.swiperButtonText}>›</Text>}
        prevButton={<Text style={styles.swiperButtonText}>‹</Text>}
      >
        {data.map((restuarant, index) => (
          <RandomCard
            key={index}
            name={restuarant.name}
            distance={restuarant.distance}
            address={restuarant.address}
            menus={restuarant.menus}
            coords={restuarant.coords}
            detail={detail}
            onPress={() => {
              setDetail(!detail);
            }}
          />
        ))}
      </Swiper>
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
  randomBoxMainText: {
    fontSize: 35,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default RandomBox;
