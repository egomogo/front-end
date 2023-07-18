import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import Container from '../components/common/Container';
import RandomCard from '../components/randomBox/RandomCard';
import { dummyData } from '../constants/Food';

const RandomBox = ({ route }) => {
  const { category } = route.params;

  return (
    <Container>
      <Text style={styles.randomBoxMainText}>소소식탁 명지대점 드가좌</Text>
      <Swiper
        style={styles.swiper}
        showsButtons={true}
        nextButton={<Text style={styles.swiperButtonText}>›</Text>}
        prevButton={<Text style={styles.swiperButtonText}>‹</Text>}
      >
        {dummyData[category].map((item, index) => (
          <RandomCard
            key={index}
            category={category}
            dummyData={dummyData}
            item={item}
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
    fontSize: 100,
    color: '#F5F5F5',
  },
  randomBoxMainText: {
    fontSize: 20,
    color: 'black',
  },
});

export default RandomBox;
