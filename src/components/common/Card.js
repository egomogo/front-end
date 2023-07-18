import { View, StyleSheet } from 'react-native';
import { CardColor } from '../../constants/Color';

const Card = ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: CardColor.background,
    borderRadius: 30,
    width: 300,
    paddingVertical: 30,
    shadowColor: CardColor.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default Card;
