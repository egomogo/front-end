import { View, Text, Pressable } from 'react-native';

const MoreBtn = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Pressable
        style={{ padding: 10, backgroundColor: 'black' }}
        onPress={() => navigation.navigate('MoreView')}
      >
        <Text>더보기</Text>
      </Pressable>
    </View>
  );
};

export default MoreBtn;
