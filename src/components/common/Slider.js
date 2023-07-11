import { useState } from 'react';
import Slider from 'react-native-slider';
import { Text, View } from 'react-native';

/**
 * 슬라이더
 *
 * @param width 슬라이더 너비
 * @param initialValue 최초에 보여줄 값
 * @param minimumValue 최솟값
 * @param maximumValue 최댓값
 * @param step 값 간격
 * @param showValue 슬라이더 하단에 값 표시 여부
 * @param text 값 옆에 적을 텍스트
 * @param onValueChange 값이 바뀔 때 실행되는 이벤트
 * @param onSlidingComplete 슬라이드 끝난 후 실행되는 이벤트
 */
const CustomSlider = ({
  width = 160,
  initialValue,
  minimumValue = 0,
  maximumValue = 1,
  step = 0,
  showValue,
  text,
  onValueChange = () => {},
  onSlidingComplete = () => {},
}) => {
  const [value, setValue] = useState(
    initialValue ? initialValue : minimumValue
  );
  return (
    <View>
      <Slider
        minimumValue={minimumValue}
        maximumValue={maximumValue}
        step={step}
        minimumTrackTintColor="#86B1E4"
        maximumTrackTintColor="#EAEAEA"
        trackStyle={{ width: width, height: 10, borderRadius: 30 }}
        thumbTintColor="#FFFFFF"
        thumbStyle={{ borderColor: '#509AFB', borderWidth: 5 }}
        value={value}
        onValueChange={(newValue) => {
          onValueChange(newValue);
          setValue(newValue);
        }}
        onSlidingComplete={(newValue) => {
          onSlidingComplete(newValue);
        }}
      />
      <Text style={{ color: 'black' }}>
        {showValue && value}
        {text}
      </Text>
    </View>
  );
};

export default CustomSlider;
