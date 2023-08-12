import { View, Pressable, Image } from 'react-native';
import moreBtn from '../../../assets/moreBtn.png';

const MoreBtn = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Pressable
        style={{ padding: 10 }}
        onPress={() => navigation.navigate('MoreView')}
      >
        <Image source={moreBtn} />
      </Pressable>
    </View>
  );
};

export default MoreBtn;
