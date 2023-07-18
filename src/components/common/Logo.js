import { Image, StyleSheet } from 'react-native';
import LogoImg from '../../../assets/logo2.png';

const Logo = () => {
  return <Image style={styles.logo} source={LogoImg} />;
};

const styles = StyleSheet.create({
  logo: {
    width: 300,
    height: 110,
  },
});

export default Logo;
