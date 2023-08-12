import { View } from 'react-native';
import { useRecoilValue } from 'recoil';
import { kakaoShopIdState } from '../atom';
import WebView from 'react-native-webview';

const MoreView = () => {
  const kakaoShopId = useRecoilValue(kakaoShopIdState);
  const uri = `https://place.map.kakao.com/m/${kakaoShopId}`;
  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{
          uri: uri,
        }}
        style={{ wdith: 1000 }}
      />
    </View>
  );
};
export default MoreView;
