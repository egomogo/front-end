import { View, StyleSheet } from 'react-native';
import { BackGroundColor } from '../../constants/Color';

const Container = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BackGroundColor,
  },
});

export default Container;
