import Logo from '../common/Logo';
import { View, StyleSheet } from 'react-native';

const HomeLogo = () => {
  return (
    <View style={styles.container}>
      <Logo />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    justifyContent: 'flex-end',
  },
});

export default HomeLogo;
