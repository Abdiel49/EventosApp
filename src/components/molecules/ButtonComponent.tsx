import { StyleSheet, TouchableHighlight, TouchableHighlightProps } from 'react-native';
import React from 'react';

import TextComponent from './atoms/TextComponent';

import { colors } from '../theme/colors';

type Props = TouchableHighlightProps & {
  title: string,
};

const ButtonComponent = (props: Props) => {
  return (
    <TouchableHighlight
      {...props}
      testID={props.testID ?? 'ButtonComponent'}
      style={props.disabled ? styles.buttonDisabled : styles.button}
    >
      <TextComponent
        color={props.disabled ? 'muted' : 'white'}
        textAlign="center" size="16"
        weight='bold'
      >
        {props.title}
      </TextComponent>
    </TouchableHighlight>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 26,
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: colors.lowlight,
    borderRadius: 26,
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
