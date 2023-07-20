import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import Container from '../components/common/Container';
import RandomCard from '../components/randomBox/RandomCard';
import { useState } from 'react';
import { dummyData } from '../constants/Food';

const RandomBox = ({ route }) => {
  const { category } = route.params;
  const [detail, setDetail] = useState(false);

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
        {dummyData[category].map((item, index) => (
          <RandomCard
            key={index}
            name={item}
            distance={1.9}
            address={'서울특별시 서대문구 증가로12길'}
            menus={[
              {
                name: '돈까스',
                price: '8,000',
              },
              {
                name: '치킨',
                price: '10,000',
              },
            ]}
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
