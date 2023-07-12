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
  if (minute <= 5) {
    level = 4;
  } else if (minute <= 10) {
    level = 5;
  } else if (minute <= 20) {
    level = 6;
  }

  return (
    <WebView
      ref={(ref) => (this.webref = ref)}
      style={styles.kakaoMap}
      source={{
        uri: 'https://2hanbyeol1.github.io/kakaomap/',
      }}
      injectedJavaScript={`setCenter(${currentCoord.latitude}, ${currentCoord.longitude}); setRadius(${minute}, ${level});`}
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
