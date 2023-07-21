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
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = () => {
  const [visible, setVisible] = useState(false);
  const [minute, setMinute] = useRecoilState(minuteState);
  const [coord, setCoord] = useState({ x: null, y: null });
  const [x, setX] = useRecoilState(xState);
  const [y, setY] = useRecoilState(yState);

  return (
    <Container>
      <HomeLogo />
      <DistanceButton
        minute={minute}
        onPress={() => {
          getCurrentPosition(setCoord, setX, setY);
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
