import { Image, View, StyleSheet, Text } from 'react-native';
import { useRecoilValue } from 'recoil';
import { kakaoShopIdState } from '../atom';
import WebView from 'react-native-webview';
import { useEffect } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import leftBack from '../../assets/leftBack.png';
import { SliderColor, TextColor } from '../constants/Color';

const MoreView = ({ navigation }) => {
  const kakaoShopId = useRecoilValue(kakaoShopIdState);
  const uri = `https://place.map.kakao.com/m/${kakaoShopId}`;

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: '',
      headerLeft: ({ onPress }) => (
        <TouchableOpacity onPress={onPress} style={styles.container}>
          <Image source={leftBack} style={styles.image} />
          <Text style={styles.text}>뒤로</Text>
        </TouchableOpacity>
      ),
    });
  }, []);

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

const styles = StyleSheet.create({
  container: { width: 100, flexDirection: 'row', bottom: 5 },
  image: { width: 20, height: 20, left: 5 },
  text: { color: TextColor.dark },
});

export default MoreView;
