import React from 'react';
import { Pressable, StyleSheet, Text, ViewStyle } from 'react-native';

interface PaginationButtonProps {
  text: string,
  onPress: () => void
  disabled?: boolean
  style?: ViewStyle
}

function PaginationButton({text, onPress, disabled = false, style = {}}: PaginationButtonProps) {
  return (
    <Pressable
      style={({pressed}) => ({
        ...nativeStyles.button,
        ...style,
        backgroundColor: pressed ? '#DBDBDB' : '#fff',
      })}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={{...nativeStyles.buttonText, ...(disabled ? {color: 'lightgrey'} : {})}}>{text}</Text>
    </Pressable>
  );
}

const nativeStyles = StyleSheet.create({
  button: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 20,
  },
});

export default PaginationButton;
