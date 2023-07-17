import { View, StyleSheet } from 'react-native';
import RandomButton from '../common/RandomButton';
import { category } from '../../constants/Food';

const CategorySelect = () => {
  return (
    <View style={styles.homegridContainer}>
      {Object.values(category).map((item) => {
        return <RandomButton category={item} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  homegridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: 360,
    height: 360,
    shadowColor: '#EAEAEA',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default CategorySelect;
