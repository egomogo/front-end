import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';
import { useEffect } from 'react';

const KakaoMap = ({ currentCoord, minute }) => {
  useEffect(() => {
    this.webref.injectJavaScript(
      `setCenter(${currentCoord.x}, ${currentCoord.y});`
    );
  }, [currentCoord]);

  useEffect(() => {
    if (minute) this.webref.injectJavaScript(`setMinute(${minute});`);
  }, [minute]);

  return (
    <WebView
      ref={(ref) => (this.webref = ref)}
      style={styles.kakaoMap}
      source={{
        uri: 'https://2hanbyeol1.github.io/kakaomap/',
      }}
      injectedJavaScript={`setCenter(${currentCoord.x}, ${currentCoord.y}); setMinute(${minute});`}
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
