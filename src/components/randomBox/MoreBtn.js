import { View, Pressable, Image } from 'react-native';
import moreBtn from '../../../assets/moreBtn.png';

const MoreBtn = ({ navigation }) => {
  return (
    <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
      <Pressable style={{}} onPress={() => navigation.navigate('MoreView')}>
        <Image source={moreBtn} style={{ padding: 10, height: 5, width: 5 }} />
      </Pressable>
    </View>
  );
};

export default MoreBtn;
