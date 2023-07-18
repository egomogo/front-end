import TextButton from '../common/TextButton';
import { View, StyleSheet } from 'react-native';

const DistanceButton = ({ onPress, minute }) => {
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
  },
});

export default DistanceButton;
