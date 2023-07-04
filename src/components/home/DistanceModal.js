import { Text } from 'react-native';
import Container from '../common/Container';
import Modal from '../common/Modal';
import CustomSlider from '../common/Slider';

const DistanceModal = ({
  visible,
  onRequestClose,
  initialValue,
  onSlidingComplete,
}) => {
  return (
    <Modal visible={visible} onRequestClose={onRequestClose}>
      <Container>
        <Text>추천 식당까지 거리 설정하기</Text>
        <CustomSlider
          width={200}
          initialValue={initialValue}
          minimumValue={5}
          maximumValue={30}
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
