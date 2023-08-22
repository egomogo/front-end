import { View, Text, StyleSheet } from 'react-native';
import { RandomCardColor } from '../../constants/Color';

const MenuView = ({ menus }) => {
  const hasLongName = menus
    ? menus.some((item) => item.name.length > 14)
    : false;
  const fontSize = hasLongName ? 14 : 18;
  return menus ? (
    menus.map((item, index) => {
      return (
        <View key={index} style={styles.row}>
          <View style={styles.nameViewContainer}>
            <Text style={{ ...styles.menu, fontSize }}>{item.name}</Text>
          </View>
          <View style={styles.menuViewContainer}>
            <Text style={styles.price}>
              {item.price}
              {!isNaN(item.price.replace(/,/g, '')) && '원'}
            </Text>
          </View>
        </View>
      );
    })
  ) : (
    <View>
      <Text style={styles.menu}>메뉴 정보 없음</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    color: RandomCardColor.menu,
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: { color: RandomCardColor.price, fontSize: 14, fontWeight: 'bold' },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  nameViewContainer: {
    flex: 3,
  },
  menuViewContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default MenuView;
