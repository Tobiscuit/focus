import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';

export const RoundButton = ({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles(size).radius, style]}
      onPress={props.onPress}>
      <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = (size) => ({
  radius: {
    borderRadius: 3,
    width: size,
    height: size,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.white,
    borderWidth: 2,
  },
  text: { color: colors.white, fontSize: size / 3 },
});

export const RounderButton = (props, style) => {
  return (
    <RoundButton
      {...props}
      style={{
        ...props.styles,
        ...style,
        borderRadius: 125 / 2,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    />
  );
};