import { Text, Pressable, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

const LikeButton = ({ restaurantId }) => {
  const [like, setLike] = useState(false);

const handleLikeButton = async () => {
  const liked = !like;
  console.log('Current like status:', liked);
  console.log('Current restaurantId:', restaurantId);

  setLike(liked);

  let likedIds = await AsyncStorage.getItem('likedIds');
  likedIds = likedIds ? likedIds.split(',') : [];
  console.log('Current likedIds before operation:', likedIds);

  if (liked) {
    likedIds.push(restaurantId);
  } else {
    likedIds = likedIds.filter(id => id !== restaurantId);
  }

  console.log('Saving likedIds:', likedIds.join(','));
  await AsyncStorage.setItem('likedIds', likedIds.join(','));
};


  return (
    <Pressable
      style={styles.pressable}
      onPress={handleLikeButton}
    >
      <Text style={styles.like}>{like ? '❤️' : '🤍'}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  like: {
    fontSize: 20,
  },
});

export default LikeButton;
