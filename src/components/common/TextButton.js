import { Pressable, Text, StyleSheet } from 'react-native';

/**
 * 텍스트 버튼
 *
 * @param text 텍스트
 * @param onPress required, press 이벤트
 * @param disabled 버튼 비활성화 여부
 * @children 텍스트
 * @returns 텍스트 버튼
 */
const TextButton = ({ text, onPress, disabled = false, children }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        { backgroundColor: disabled ? '#D6EAFF' : '#509AFB' },
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
    paddingHorizontal: 80,
    paddingVertical: 5,
    borderRadius: 50,
  },
  text: {
    color: '#FFFFFF',
  },
});

export default TextButton;
