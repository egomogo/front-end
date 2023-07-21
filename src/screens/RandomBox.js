import { Text, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import Container from '../components/common/Container';
import RandomCard from '../components/randomBox/RandomCard';
import { useState, useEffect } from 'react';
import { dummyData } from '../constants/Food';
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
        setData(res.data.documents);
        // console.log(res.data.documents);
      }
    );
    // .catch((error) =>
    //   console.log(
    //     error.code,
    //     error.message,
    //     error.response.data,
    //     error.response.status,
    //     error.response.headers
    //   )
    // );
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
        {data.map((restuarant) =>
          console.log(
            !restuarant.menus
              ? '메뉴 정보 없음'
              : restuarant?.menus?.map((menu) => {
                  console.log(
                    typeof menu === 'string' ? menu : '메뉴 정보 없음'
                  );
                })
          )
        )}
        {data.map((restuarant, index) => (
          <RandomCard
            key={index}
            name={restuarant.name}
            distance={restuarant.distance}
            address={restuarant.address}
            menus={restuarant.menus}
            coords={{ x: 37.5832798, y: 126.9231295 }}
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
