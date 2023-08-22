import React, { useState, useEffect } from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LikeButton = ({ restaurantId, liked, onLikeChanged }) => {
  const [like, setLike] = useState(liked);

  const handleLikeButton = async () => {
    const likedStatus = !like;
    setLike(likedStatus);

    let likedIds = await AsyncStorage.getItem('likedIds');
    likedIds = likedIds ? likedIds.split(',') : [];

    if (likedStatus) {
      likedIds.push(restaurantId);
    } else {
      likedIds = likedIds.filter(id => id !== restaurantId);
    }

    await AsyncStorage.setItem('likedIds', likedIds.join(','));

    onLikeChanged(likedStatus, restaurantId);
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
