import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import React from 'react';
import { colors } from '@app/theme/colors';

export type TextInputComponentProps = TextInputProps & {
  type?: 'email' | 'password' | 'numeric' | 'phone-number' | 'default',
};

const TextInputComponet = (props: TextInputComponentProps) => {
  return (
    <TextInput
      { ...props }
      testID={ props.testID ?? 'TextInputComponent' }
      placeholderTextColor={ props.placeholderTextColor || colors.muted }
      placeholder={ props.placeholder ?? '' }
      secureTextEntry={ props.secureTextEntry ?? props.type === 'password' }
      keyboardType={
        props.keyboardType ?? props.type === 'email'
          ? 'email-address'
          : props.type === 'numeric'
            ? 'number-pad'
            : props.type === 'phone-number'
              ? 'phone-pad'
              : 'default'
      }
      style={[ styles.input, props.style ]}
    />
  );
};

export default TextInputComponet;

const styles = StyleSheet.create({
  input: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    minWidth: 280,
    // lineHeight: 0,
    margin: 0,
    padding: 0,
    color: colors.dark,
  },
});
