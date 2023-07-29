import Logo from '../common/Logo';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

const HomeLogo = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Logo />
      </TouchableOpacity>
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
