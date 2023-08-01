import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { NavContents } from '../../constants/NavContent';
import { foodCategory } from '../../constants/Food';

const RandomButton = ({ text, category, img }) => {
  const navigation = useNavigation();
  const [isSelected, setIsSelected] = useState(false);
  const MAX_NUM = 100000;
  const MIN_NUM = 1;
  const seed = Math.floor(Math.random() * (MAX_NUM - MIN_NUM) + MIN_NUM);
  const handlePressIn = () => {
    setIsSelected(true);
  };

  const handlePressOut = () => {
    setIsSelected(false);
  };

  const handlePress = () => {
    navigation.navigate(NavContents.RandomBox.name, { category, seed });
  };

  const buttonStyle = isSelected
    ? [styles.randombutton, styles.randombuttonselected]
    : category === foodCategory.ALL.name
    ? styles.allButton
    : styles.randombutton;

  const textStyle =
    category === foodCategory.ALL.name
      ? styles.allButtonText
      : styles.randombuttonText;

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={handlePress}
    >
      <View style={styles.imageContainer}>
        {img && <Image source={img} style={styles.image} />}
      </View>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  randombutton: {
    backgroundColor: 'white',
    width: 120,
    height: 120,
    borderRadius: 30,
  },
  allButton: {
    backgroundColor: '#002E66',
    width: 120,
    height: 120,
    borderRadius: 30,
  },
  randombuttonText: {
    color: 'black',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 18,
  },
  allButtonText: {
    color: 'white',
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 35,
  },
  image: {
    width: 35,
    height: 35,
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  randombuttonselected: {
    borderWidth: 2,
    borderColor: '#D1D1D6',
    shadowColor: '#F4F5F6',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default RandomButton;
