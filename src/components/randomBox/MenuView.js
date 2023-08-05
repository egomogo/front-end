import { View, Text, StyleSheet } from 'react-native';
import { RandomCardColor } from '../../constants/Color';

const MenuView = ({ menus }) => {
  return menus ? (
    menus.map((item, index) => {
      return (
        <View key={index} style={styles.row}>
          <Text style={styles.menu}>{item.name}</Text>
          <Text style={styles.price}>
            {item.price}
            {!isNaN(item.price.replace(/,/g, '')) && '원'}
          </Text>
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
    width: 160,
    color: RandomCardColor.menu,
    fontSize: 20,
    fontWeight: 'bold',
  },
  price: { color: RandomCardColor.price, fontSize: 20, fontWeight: 'bold' },
});

export default MenuView;
