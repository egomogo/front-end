import { View, Text, Pressable, StyleSheet } from 'react-native';
import LikeButton from '../common/LikeButton';
import KakaoMap from '../common/KakaoMap';
import { RandomCardColor } from '../../constants/Color';
import MoreBtn from '../../components/randomBox/MoreBtn';
import { BackGroundColor } from '../../constants/Color';

const WishListBox = ({
  name,
  distance,
  address,
  menus,
  navigation,
  restaurantId,
  liked,
  onLikeChanged,
  categories,
  kakaoShopId,
}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.cardContainer]}>
        <View style={[styles.rowend, styles.spaceBetween]}>
          <Text style={styles.name}>{name}</Text>
          <LikeButton
            restaurantId={restaurantId}
            liked={liked}
            onLikeChanged={onLikeChanged}
          />
        </View>
        <Text style={styles.address}>{address}</Text>
        <MoreBtn navigation={navigation} kakaoShopId={kakaoShopId} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  cardContainer: {
    backgroundColor: RandomCardColor.background,
    borderRadius: 30,
    padding: 30,
    width: '88%',
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
    fontSize: 23,
  },
  distance: {
    color: RandomCardColor.distance,
    fontSize: 15,
    marginRight: 10,
  },
  address: {
    color: RandomCardColor.address,
    fontSize: 14,
    marginBottom: 20,
  },
});

export default WishListBox;
