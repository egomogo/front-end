import React from 'react';
import Container from '../components/common/Container';
import HomeLogo from '../components/home/HomeLogo';
import DistanceButton from '../components/home/DistanceButton';
import DistanceModal from '../components/home/DistanceModal';
import CategorySelect from '../components/home/CategorySelect';
import { getCurrentPosition } from '../components/common/GeolocationAPI';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { minuteState, xState, yState } from '../atom';

const Home = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const [x, setX] = useRecoilState(xState);
  const [y, setY] = useRecoilState(yState);
  navigation.setOptions({ headerShown: false });

  return (
    <Container>
      <HomeLogo navigation={navigation} />
      <DistanceButton
        onPress={() => {
          getCurrentPosition(setX, setY);
          setVisible(true);
        }}
      />
      <DistanceModal
        currentCoord={{ x: x, y: y }}
        visible={visible}
        onRequestClose={() => {
          setVisible(false);
        }}
      />
      <CategorySelect />
    </Container>
  );
};

export default Home;
