import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FilterColor } from '../../constants/Color';

const FilterButton = ({ category, isSelected, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.button, isSelected ? styles.selected : {}]}
      onPress={onPress}
    >
      <Text style={isSelected ? styles.selectedText : {}}>{category}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: FilterColor.BackGround,
    borderWidth: 1,
    borderColor: FilterColor.color,
    borderRadius: 30,
    padding: 10,
    width: '47%',
    alignItems: 'center',
    margin: 5,
  },
  selected: {
    borderColor: FilterColor.border,
  },
  selectedText: {
    color: 'black',
  },
});

export default FilterButton;
