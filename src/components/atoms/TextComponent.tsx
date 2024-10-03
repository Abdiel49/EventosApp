import { ColorValue, StyleSheet, Text, TextProps } from 'react-native';
import React from 'react';

import { colors } from '../../theme/colors';

type Props = TextProps & {
  size?:  '12' | '14' | '16' | '18' | '20' | '22' | '24' | '28';
  weight?: 'bold' | 'semibold' | 'light',
  color?: 'primary' | 'secondary' | 'dark' | 'muted' | 'white',
  customColor?: ColorValue,
  textAlign?: 'left' | 'center' | 'right',
  underline?: boolean,
};

const TextComponent = (props: Props) => {
  return (
    <Text
      {...props}
      testID={props.testID ?? 'TextComponent'}
      style={[
        styles.text,
        props.size === '12' && styles.size12,
        props.size === '14' && styles.size14,
        props.size === '16' && styles.size16,
        props.size === '18' && styles.size18,
        props.size === '20' && styles.size20,
        props.size === '22' && styles.size22,
        props.size === '24' && styles.size24,
        props.size === '28' && styles.size28,
        props.weight === 'bold' && styles.bold,
        props.weight === 'semibold' && styles.semibold,
        props.weight === 'light' && styles.light,
        props.color === 'primary' && styles.primaryColor,
        props.color === 'secondary' && styles.secondaryColor,
        props.color === 'dark' && styles.darkColor,
        props.color === 'muted' && styles.mutedColor,
        props.color === 'white' && styles.whiteColor,
        props.customColor && { color: props.customColor },
        props.textAlign === 'left' && styles.left,
        props.textAlign === 'center' && styles.center,
        props.textAlign === 'right' && styles.right,
        props.underline && styles.underlineText,
        props.style,
      ]}
    >
      {props.children}
    </Text>
  );
};

export default TextComponent;

const styles = StyleSheet.create({
  text: {
    color: colors.dark,
    fontSize: 12,
    fontWeight: '400',
  },
  size12: {
    fontSize: 12,
  },
  size14: {
    fontSize: 14,
  },
  size16: {
    fontSize: 16,
  },
  size18: {
    fontSize: 18,
  },
  size20: {
    fontSize: 20,
  },
  size22: {
    fontSize: 22,
  },
  size24: {
    fontSize: 24,
  },
  size28: {
    fontSize: 28,
  },
  bold: {
    fontWeight: 'bold',
  },
  semibold: {
    fontWeight:'semibold',
  },
  light: {
    fontWeight: 'light',
  },
  left: {
    textAlign: 'left',
  },
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
  primaryColor: {
    color: colors.primary,
  },
  secondaryColor: {
    color: colors.secondary,
  },
  darkColor: {
    color: colors.dark,
  },
  mutedColor: {
    color: colors.muted,
  },
  whiteColor: {
    color: colors.white,
  },
  underlineText: {
    textDecorationLine: 'underline',
  },
});
