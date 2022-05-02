import React from 'react';
import {TextInput} from '../../atoms/TextInput/TextInput';
import {Text} from '../../atoms/Typography/Text';
import {View} from 'react-native';
import {RowContainer} from '../../styledContainers/FlexContainers';
import {useTheme} from 'styled-components/native';

export interface InputWithLabelProps {
  label: string;
  size?: 'small' | 'big';
  isError?: boolean;
  errorMessage?: string;
}
export function InputWithLabel({
  label,
  size = 'big',
  isError = false,
  errorMessage = 'This field is required',
}: InputWithLabelProps) {
  const {fonts} = useTheme();
  return (
    <>
      <RowContainer>
        <Text textType="thin" textColor={isError ? 'error' : 'primary'}>
          {label}
        </Text>
        <View style={{flex: 1, marginLeft: 8}}>
          <TextInput size={size} borderColor={isError ? 'error' : 'primary'} />
        </View>
      </RowContainer>
      {isError && (
        <Text
          textType="thin"
          textColor="error"
          style={{fontSize: fonts.fontSizes[1]}}>
          {errorMessage}
        </Text>
      )}
    </>
  );
}
