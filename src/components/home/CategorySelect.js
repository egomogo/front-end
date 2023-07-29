import { View, StyleSheet } from 'react-native';
import RandomButton from '../common/RandomButton';
import { foodCategory } from '../../constants/Food';

const CategorySelect = () => {
  return (
    <View style={styles.container}>
      <View style={styles.homegridContainer}>
        {Object.values(foodCategory).map((item) => {
          return (
            <RandomButton
              key={item.name}
              text={item.text}
              category={item.name}
              img={item.img}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.6,
  },
  homegridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: 360,
    height: 360,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default CategorySelect;
