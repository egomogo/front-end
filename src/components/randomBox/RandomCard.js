import { View, Text, Pressable, StyleSheet } from 'react-native';
import LikeButton from '../common/LikeButton';
import KakaoMap from '../common/KakaoMap';
import { RandomCardColor } from '../../constants/Color';

const RandomCard = ({
  name,
  distance,
  address,
  menus,
  coords,
  detail,
  onPress,
}) => {
  const MenuView = () => {
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

  const MapView = () => {
    return <KakaoMap currentCoord={coords} />;
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <View
          style={[
            styles.cardContainer,
            {
              width: detail ? 330 : 300,
              flex: detail ? 0.9 : 0,
            },
          ]}
        >
          <View style={[styles.column, styles.spaceBetween]}>
            <View style={styles.rowend}>
              <Text style={styles.distance}>{distance}m</Text>
              <LikeButton />
            </View>
            <Text style={styles.name}>{name}</Text>
          </View>
          <Text style={styles.address}>{address}</Text>
          {detail && <MenuView />}
          {detail ? <MapView /> : <MenuView />}
        </View>
      </Pressable>
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
    backgroundColor: RandomCardColor.background,
    borderRadius: 30,
    padding: 30,
    shadowColor: RandomCardColor.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowend: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  name: {
    color: RandomCardColor.name,
    fontSize: 28,
    fontWeight: 'bold',
  },
  distance: {
    color: RandomCardColor.distance,
    fontSize: 15,
    fontWeight: 'bold',
    marginRight: 10,
  },
  address: {
    color: RandomCardColor.address,
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  menu: {
    width: 160,
    color: RandomCardColor.menu,
    fontSize: 20,
    fontWeight: 'bold',
  },
  price: { color: RandomCardColor.price, fontSize: 20, fontWeight: 'bold' },
});

export default RandomCard;
