import { View, Text, Pressable, StyleSheet } from 'react-native';
import LikeButton from '../common/LikeButton';
import KakaoMap from '../common/KakaoMap';
import MenuView from './MenuView';
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
          {detail ? (
            <>
              <MenuView menus={menus} />
              <KakaoMap currentCoord={coords} />
            </>
          ) : (
            <MenuView menus={menus} />
          )}
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
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  menu: {
    width: 160,
    color: RandomCardColor.menu,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: { color: RandomCardColor.price, fontSize: 15, fontWeight: 'bold' },
});

export default RandomCard;
