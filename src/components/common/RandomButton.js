import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { NavContents } from '../../constants/NavContent';
import { category, dummyData } from '../constants';

const RandomButton = ({ category }) => {
  const navigation = useNavigation();
  const [isSelected, setIsSelected] = useState(false);

  const handlePressIn = () => {
    setIsSelected(true);
  };

  const handlePressOut = () => {
    setIsSelected(false);
  };

  const handlePress = () => {
    navigation.navigate(NavContents.RandomBox.name, { category });
  };
  let customStyle;
  switch (category) {
    case category.KOREAN:
      customStyle = { borderTopLeftRadius: 30 };
      break;
    case category.WESTERN_ASIAN:
      customStyle = { borderTopRightRadius: 30 };
      break;
    case category.CHINESE:
      customStyle = { borderBottomLeftRadius: 30 };
      break;
    case category.SNACKS:
      customStyle = { borderBottomRightRadius: 30 };
      break;
    case category.ALL:
      customStyle = { borderRadius: 30 };
      break;
    default:
      customStyle = {};
      break;
  }
  const imageSource = getImageForCategory(category);
  const buttonStyle = isSelected
    ? [styles.randombutton, customStyle, styles.randombuttonselected]
    : category === 'ALL'
    ? [styles.allButton, customStyle]
    : [styles.randombutton, customStyle];

  const textStyle =
    category === 'ALL' ? styles.allButtonText : styles.randombuttonText;

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={handlePress}
    >
      <View style={styles.imageContainer}>
        {imageSource && <Image source={imageSource} style={styles.image} />}
      </View>
      <Text style={textStyle}>{category}</Text>
    </TouchableOpacity>
  );
};

const getImageForCategory = (category) => {
  switch (category) {
    case '분식':
      return require('../../../assets/dining.png');
    case '일식':
      return require('../../../assets/japan.png');
    case '양식,아시안':
      return require('../../../assets/asia.png');
    case '치킨':
      return require('../../../assets/meat.png');
    case '한식':
      return require('../../../assets/korea.png');
    case '중식':
      return require('../../../assets/china.png');
    case '카페':
      return require('../../../assets/cafe.png');
    case '간편식':
      return require('../../../assets/fast_food.png');
    default:
      return null;
  }
};

const styles = StyleSheet.create({
  randombutton: {
    backgroundColor: 'white',
    width: 120,
    height: 120,
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
