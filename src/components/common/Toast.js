import DefaultToast from 'react-native-toast-message';
import { View, Text, StyleSheet } from 'react-native';
import { ToastColor } from '../../constants/Color';

const Toast = ({ type = ToastType.basic, text }) => {
  DefaultToast.show({
    type: type,
    position: 'bottom',
    text1: text,
  });
};

export const ToastType = {
  basic: 'basicToast',
};

export const toastConfig = {
  basicToast: ({ text1 }) => (
    <View style={styles.toastView}>
      <Text style={styles.toastText}>{text1}</Text>
    </View>
  ),
};

const styles = StyleSheet.create({
  toastView: {
    backgroundColor: ToastColor.background,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 50,
  },
  toastText: {
    color: ToastColor.color,
    fontSize: 17,
  },
});

export default Toast;
