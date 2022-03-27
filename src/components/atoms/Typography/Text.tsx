import {Text as NativeText} from 'react-native';
import {useTheme} from 'styled-components/native';
import React from 'react';

export interface TextProps {
  children: string;
  textType?: 'regular' | 'medium' | 'light' | 'thin' | 'heading';
  textColor?:
    | 'primary'
    | 'secondary'
    | 'disabled'
    | 'inverse'
    | 'error'
    | 'success';
  style?: any;
}

export function Text({
  children,
  style,
  textType = 'regular',
  textColor = 'primary',
}: TextProps) {
  const {fonts, colors} = useTheme();
  return (
    <NativeText
      style={{
        ...style,
        ...fonts.fonts[textType],
        fontSize: style?.fontSize ?? fonts.fontSizes[2],
        color: colors.text[textColor],
        textAlign: 'left',
      }}>
      {children}
    </NativeText>
  );
}
