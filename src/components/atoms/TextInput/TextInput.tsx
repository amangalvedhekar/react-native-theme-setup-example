import React from 'react';
import {
  TextInput as NativeInput,
  TextInputProps as NativeInputProps,
} from 'react-native';
import {useTheme} from 'styled-components/native';
export interface TextInputProps extends NativeInputProps {
  textType?: 'regular' | 'medium' | 'light' | 'thin' | 'heading';
  textColor?:
    | 'primary'
    | 'secondary'
    | 'disabled'
    | 'inverse'
    | 'error'
    | 'success';
  borderColor?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'quaternary'
    | 'error'
    | 'success';
  size?: 'big' | 'small';
}
export function TextInput({
  placeholder,
  textType = 'regular',
  textColor = 'primary',
  borderColor = 'primary',
  size = 'big',
  ...rest
}: TextInputProps) {
  const {fonts, colors, dark} = useTheme();
  return (
    <NativeInput
      {...rest}
      keyboardAppearance={dark ? 'dark' : 'light'}
      placeholder={placeholder}
      placeholderTextColor={colors.text.disabled}
      style={{
        ...fonts.fonts[textType],
        color: colors.text[textColor],
        fontSize: fonts.fontSizes[2],
        borderWidth: 2,
        borderRadius: 12,
        borderColor: colors.ui[borderColor],
        height: 60,
        margin: size === 'big' ? 0 : 8,
        padding: 16,
        width: size === 'big' ? '100%' : '50%',
      }}
    />
  );
}
