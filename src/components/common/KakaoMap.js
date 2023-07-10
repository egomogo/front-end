// import WebView from './WebView';
import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';

const KakaoMap = () => {
  return (
    <WebView
      style={styles.kakaoMap}
      source={{
        uri: 'https://2hanbyeol1.github.io/kakaomap/',
      }}
    />
  );
};

const styles = StyleSheet.create({
  kakaoMap: {
    width: 300,
    height: 300,
  },
});

export default KakaoMap;
