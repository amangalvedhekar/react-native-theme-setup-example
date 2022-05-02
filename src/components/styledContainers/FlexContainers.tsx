import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {StyledProps} from 'styled-components';
export interface RowContainerProps {
  children: JSX.Element | JSX.Element[];
  style?: StyledProps<ViewStyle>;
}
const containerStyle = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export function RowContainer({children, style}: RowContainerProps) {
  return <View style={[containerStyle.container, style]}>{children}</View>;
}
