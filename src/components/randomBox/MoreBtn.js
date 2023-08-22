import { View, TouchableOpacity, Image } from 'react-native';
import moreBtn from '../../../assets/moreBtn.png';
import { useRecoilState } from 'recoil';
import { kakaoShopIdState } from '../../atom';

const MoreBtn = ({ navigation, kakaoShopId }) => {
  const [kakaoId, setkakaoShopId] = useRecoilState(kakaoShopIdState);
  return (
    <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity
        style={{}}
        onPress={() => {
          setkakaoShopId(kakaoShopId);
          navigation.navigate('MoreView');
        }}
      >
        <Image source={moreBtn} style={{ padding: 10, height: 5, width: 5 }} />
      </TouchableOpacity>
    </View>
  );
};

export default MoreBtn;
