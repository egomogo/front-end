import { Text, StyleSheet } from 'react-native';
import Card from '../common/Card';

const RandomCard = ({ item }) => {
  return (
    <Card>
      <Text style={styles.randomBoxtext}>{item}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {},
  randomBoxtext: {
    color: '#000000',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default RandomCard;
