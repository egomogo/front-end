import TextButton from '../common/TextButton';
import { View, StyleSheet } from 'react-native';
import { useRecoilState } from 'recoil';
import { minuteState } from '../../atom';

const DistanceButton = ({ onPress }) => {
  const [minute, setMinute] = useRecoilState(minuteState);
  return (
    <View style={styles.container}>
      <TextButton width={30} onPress={onPress}>
        {minute}분 거리 내의 식당만 추천해드려요
      </TextButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    justifyContent: 'center',
  },
});

export default DistanceButton;
