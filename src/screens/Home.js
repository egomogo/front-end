import React from 'react';
import Container from '../components/common/Container';
import DistanceButton from '../components/home/DistanceButton';
import DistanceModal from '../components/home/DistanceModal';
import CategorySelect from '../components/home/CategorySelect';
import { getCurrentPosition } from '../components/common/GeolocationAPI';
import { useState } from 'react';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = () => {
  const [visible, setVisible] = useState(false);
  const [minute, setMinute] = useState(5);
  const [coord, setCoord] = useState({ x: null, y: null });

  return (
    <Container>
      <DistanceButton
        minute={minute}
        onPress={() => {
          getCurrentPosition(setCoord);
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
      <CategorySelect />
    </Container>
  );
};

export default Home;
