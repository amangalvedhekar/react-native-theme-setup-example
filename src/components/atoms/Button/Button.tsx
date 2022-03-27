import {Pressable} from 'react-native';
import {Text} from '../Typography/Text';
import React from 'react';
import {useTheme} from 'styled-components/native';
export interface ButtonProps {
  text: string;
  size?: 'big' | 'small',
}
export function Button({text, size = 'big'}: ButtonProps) {
  const {colors} = useTheme();
  return (
    <Pressable
      style={({pressed}) => [
        {
          backgroundColor: pressed ? colors.ui.secondary : colors.ui.primary,
        },
        {
          borderWidth: 2,
          borderRadius: 24,
          alignItems: 'center',
          padding: 4,
          width: size === 'small' ? '50%' : '100%',
        },
      ]}>
      <Text textColor="inverse" style={{flexWrap: 'wrap'}}>
        {text}
      </Text>
    </Pressable>
  );
}
