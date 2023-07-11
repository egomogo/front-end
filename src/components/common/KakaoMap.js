import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';
import { useEffect } from 'react';

const KakaoMap = ({ currentCoord, minute }) => {
  useEffect(() => {
    this.webref.injectJavaScript(
      `setCenter(${currentCoord.latitude}, ${currentCoord.longitude})`
    );
  }, [currentCoord]);

  useEffect(() => {
    this.webref.injectJavaScript(`setRadius(${minute}, ${level});`);
  }, [minute]);

  var level;
  if (minute == 5) {
    level = 2;
  } else if (minute == 10) {
    level = 3;
  } else if (minute == 15) {
    level = 4;
  } else {
    level = 4;
  }

  return (
    <WebView
      ref={(ref) => (this.webref = ref)}
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
    flex: 1,
  },
});

export default KakaoMap;
