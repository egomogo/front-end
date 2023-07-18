import { View, Text, Pressable, StyleSheet } from 'react-native';
import LikeButton from '../common/LikeButton';
import KakaoMap from '../common/KakaoMap';
import { RandomCardColor } from '../../constants/Color';

const RandomCard = ({ name, distance, address, menus, detail, onPress }) => {
  const MenuView = () => {
    return menus.map((item, index) => {
      return (
        <View key={index} style={styles.row}>
          <Text style={styles.menu}>{item.name}</Text>
          <Text style={styles.price}>{item.price}원</Text>
        </View>
      );
    });
  };

  const MapView = () => {
    return (
      <KakaoMap
        currentCoord={{ latitude: 127.213123, longitude: 36.123132 }}
        minute={5}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <View
          style={[
            styles.cardContainer,
            {
              flex: detail ? 0.7 : 0,
            },
          ]}
        >
          <View style={[styles.row, styles.spaceBetween]}>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.row}>
              <Text style={styles.distance}>{distance}m</Text>
              <LikeButton />
            </View>
          </View>
          <Text style={styles.address}>{address}</Text>
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
    width: 300,
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
  spaceBetween: {
    justifyContent: 'space-between',
  },
  name: {
    color: RandomCardColor.name,
    fontSize: 30,
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
    width: 70,
    color: RandomCardColor.menu,
    fontSize: 23,
    fontWeight: 'bold',
  },
  price: { color: RandomCardColor.price, fontSize: 23, fontWeight: 'bold' },
});

export default RandomCard;
