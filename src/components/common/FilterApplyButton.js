import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { TextColor } from '../../constants/Color';
import { FilterColor } from '../../constants/Color';

const FilterApplyButton = ({
  text,
  onPress,
  disabled = false,
  children,
  color = FilterColor.default,
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed
            ? FilterColor.pressed
            : disabled
            ? FilterColor.disabled
            : color,
          width: 340,
          height: 50,
        },
        styles.button,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.text}>
        {text}
        {children}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    color: TextColor.light,
    fontSize: 15,
  },
});

export default FilterApplyButton;
