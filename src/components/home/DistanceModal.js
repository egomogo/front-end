import { Text } from 'react-native';
import Container from '../common/Container';
import KakaoMap from '../common/KakaoMap';
import Modal from '../common/Modal';
import CustomSlider from '../common/Slider';

const DistanceModal = ({
  currentCoord,
  visible,
  onRequestClose,
  minute,
  onSlidingComplete,
}) => {
  return (
    <Modal visible={visible} onRequestClose={onRequestClose}>
      <Container>
        <KakaoMap currentCoord={currentCoord} minute={minute} />
        <Text>추천 식당까지 거리 설정하기</Text>
        <CustomSlider
          width={300}
          initialValue={minute}
          minimumValue={5}
          maximumValue={20}
          step={5}
          showValue
          text="분"
          onSlidingComplete={onSlidingComplete}
        />
      </Container>
    </Modal>
  );
};

export default DistanceModal;
