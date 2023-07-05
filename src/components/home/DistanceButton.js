import TextButton from '../common/TextButton';

const DistanceButton = ({ onPress, minute }) => {
  return (
    <TextButton width={30} onPress={onPress}>
      {minute}분 거리 내의 식당만 추천해드려요
    </TextButton>
  );
};

export default DistanceButton;
