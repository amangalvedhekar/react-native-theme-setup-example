import React from 'react';
import {TextInput} from '../../atoms/TextInput/TextInput';
import {Text} from '../../atoms/Typography/Text';
export interface InputWithLabelProps {
  label: string;
  size?: 'small' | 'big';
}
export function InputWithLabel({label, size = 'big'}: InputWithLabelProps) {
  return (
    <>
      <Text textType="thin">{label}</Text>
      <TextInput size={size} />
    </>
  );
}
