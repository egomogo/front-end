import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import { dummyData } from '../constants/Food';

const RandomBox = ({ route }) => {
  const { category } = route.params;

  const getRandomItem = (items) =>
    items[Math.floor(Math.random() * items.length)];

  return (
    <View style={styles.randomBoxBackcontainer}>
      <Text style={styles.randomBoxMainText}>소소식탁 명지대점 드가좌</Text>
      <Swiper
        showsButtons={true}
        nextButton={<Text style={styles.swiperButtonText}>›</Text>}
        prevButton={<Text style={styles.swiperButtonText}>‹</Text>}
      >
        {dummyData[category].map((item, index) => (
          <View key={index} style={styles.randomBoxContainer}>
            <Text style={styles.randomBoxtext}>
              {getRandomItem(dummyData[category])}
            </Text>
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  randomBoxBackcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  randomBoxContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    width: 300,
    height: 300,
    margin: 45,
    shadowColor: '#EAEAEA',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  randomBoxtext: {
    color: '#000000',
    fontSize: 30,
    fontWeight: 'bold',
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
