import React from 'react';
import {TextInput} from '../../atoms/TextInput/TextInput';
import {Text} from '../../atoms/Typography/Text';

export function InputWithLabel() {
  return (
    <>
      <Text textType="thin">Email</Text>
      <TextInput />
    </>
  );
}
