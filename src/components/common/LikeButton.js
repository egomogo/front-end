import { Text, Pressable, StyleSheet } from 'react-native';
import { useState } from 'react';

const LikeButton = () => {
  const [like, setLike] = useState(false);
  return (
    <Pressable
      style={styles.pressable}
      onPress={() => {
        setLike(!like);
      }}
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
