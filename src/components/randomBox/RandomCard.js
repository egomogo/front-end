import { View, Text, Pressable, StyleSheet } from 'react-native';
import LikeButton from '../common/LikeButton';
import KakaoMap from '../common/KakaoMap';
import MenuView from './MenuView';
import { RandomCardColor } from '../../constants/Color';
import MoreBtn from './MoreBtn';

const RandomCard = ({
  name,
  distance,
  address,
  menus,
  coords,
  detail,
  onPress,
  navigation,
  restaurantId,
  onLikeChanged,
  kakaoShopId,
}) => {
  const formattedName = name.split(' ').join('\n');
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
            <View style={styles.rowstart}>
              <View style={styles.nameContainer}>
                <Text style={styles.name}>{formattedName}</Text>
              </View>

              <View style={styles.distanceLikeButtonContainer}>
                <Text style={styles.distance}>{distance}m</Text>
                <LikeButton
                  restaurantId={restaurantId}
                  onLikeChanged={onLikeChanged}
                />
              </View>
            </View>
          </View>
          <Text style={styles.address}>{address}</Text>
          {detail ? (
            <>
              <KakaoMap currentCoord={coords} />
              <MoreBtn navigation={navigation} kakaoShopId={kakaoShopId} />
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
    padding: 25,
    shadowColor: RandomCardColor.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  rowstart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  nameContainer: {
    flex: 10,
  },
  distanceLikeButtonContainer: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  spaceBetween: {
    justifyContent: 'flex-end',
  },
  name: {
    color: RandomCardColor.name,
    fontSize: 27,
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
    marginTop: 5,
  },
});

export default RandomCard;
