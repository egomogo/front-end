import { Text, StyleSheet } from 'react-native';
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
  const seed = 1;

  useEffect(() => {
    getRandomRestaurant(seed, category, x, y, distanceLimit, 0, 10).then(
      (res) => {
        if (res.data.documents.length === 0) {
          Toast({
            text: NULL_DATA,
          });
        }
        setData(res.data.documents);
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
