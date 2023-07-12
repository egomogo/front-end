import Container from '../components/common/Container';
import DistanceButton from '../components/home/DistanceButton';
import DistanceModal from '../components/home/DistanceModal';
import { watchPosition } from '../components/common/GeolocationAPI';
import { useState } from 'react';

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
    </Container>
  );
};

export default Home;
