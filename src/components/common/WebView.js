import { WebView as DefaultWebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';

const WebView = ({ uri }) => {
  return <DefaultWebView style={styles.webView} source={{ uri: uri }} />;
};

const styles = StyleSheet.create({
  webView: {
    width: 300,
    height: 300,
  },
});
export default WebView;
