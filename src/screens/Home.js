import React from 'react';
import { View, StyleSheet } from 'react-native';
import Container from '../components/common/Container';
import RandomButton from '../components/common/RandomButton';
import DistanceButton from '../components/home/DistanceButton';
import DistanceModal from '../components/home/DistanceModal';
import { watchPosition } from '../components/common/GeolocationAPI';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = () => {
  const [visible, setVisible] = useState(false);
  const [minute, setMinute] = useState(5);
  const [coord, setCoord] = useState({ latitude: null, longitude: null });

  return (
    <Container>
      <DistanceButton
        minute={minute}
        onPress={() => {
          watchPosition(setCoord);
          setVisible(true);
        }}
      />
      <DistanceModal
        currentCoord={coord}
        visible={visible}
        onRequestClose={() => {
          setVisible(false);
        }}
        minute={minute}
        onSlidingComplete={(value) => setMinute(value)}
      />
      <View style={styles.homegridContainer}>
               <RandomButton category="분식"/>
              <RandomButton category="일식" />
              <RandomButton category="양식,아시안" />
              <RandomButton category="고기" />
              <RandomButton category="ALL" />
              <RandomButton category="한식" />
              <RandomButton category="중식" />
              <RandomButton category="카페" />
              <RandomButton category="간편식" />
            </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  homegridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'white',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width:360,
    height:360,
    shadowColor: "EAEAEA",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default Home;
