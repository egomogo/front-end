import Container from '../components/common/Container';
import DistanceButton from '../components/home/DistanceButton';
import DistanceModal from '../components/home/DistanceModal';
import { useState } from 'react';

const Home = () => {
  const [visible, setVisible] = useState(false);
  const [minute, setMinute] = useState(5);

  return (
    <Container>
      <DistanceButton
        minute={minute}
        onPress={() => {
          setVisible(true);
        }}
      />
      <DistanceModal
        visible={visible}
        onRequestClose={() => {
          setVisible(false);
        }}
        initialValue={minute}
        onSlidingComplete={(value) => setMinute(value)}
      />
    </Container>
  );
};

export default Home;
