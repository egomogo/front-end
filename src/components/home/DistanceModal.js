import { Text } from 'react-native';
import Container from '../common/Container';
import KakaoMap from '../common/KakaoMap';
import Modal from '../common/Modal';
import CustomSlider from '../common/Slider';
import TextButton from '../common/TextButton';
import { SliderColor } from '../../constants/Color';
import { useRecoilState } from 'recoil';
import { minuteState } from '../../atom';

const DistanceModal = ({ currentCoord, visible, onRequestClose }) => {
  const [minute, setMinute] = useRecoilState(minuteState);
  let sliderMinute = minute;

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
          mainColor={SliderColor.mainRed}
          onSlidingComplete={(value) => {
            sliderMinute = value;
          }}
        />
        <TextButton
          onPress={() => {
            setMinute(sliderMinute);
            onRequestClose();
          }}
        >
          확인
        </TextButton>
      </Container>
    </Modal>
  );
};

export default DistanceModal;
