import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import React from 'react';

import { colors } from '../../theme/colors';
// import { colors } from '@app/theme/colors';

export type TextInputComponentProps = TextInputProps & {
  type?: 'email' | 'password' | 'numeric' | 'phone-number',
};

const TextInputComponent = (props: TextInputComponentProps) => {
  return (
    <TextInput
      { ...props }
      value={props.value ?? ''}
      testID={ props.testID ?? 'TextInputComponent' }
      placeholderTextColor={ props.placeholderTextColor || colors.muted }
      placeholder={ props.placeholder ?? '' }
      secureTextEntry={ props.type === 'password' || props.secureTextEntry }
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

export default TextInputComponent;

const styles = StyleSheet.create({
  input: {
    fontSize: 24,
    fontWeight: '400',
    minWidth: 280,
    // lineHeight: 0,
    // margin: 0,
    // padding: 0,
    color: 'red',
    // fon
    // backgroundColor: colors.black_a40,
  },
});
