import { ActivityIndicator, StyleSheet, TouchableHighlight, TouchableHighlightProps } from 'react-native';
import React from 'react';

import TextComponent from '../atoms/TextComponent';

import { colors } from '@app/theme';

type Props = TouchableHighlightProps & {
  title: string,
  isLoading?: boolean;
};

const ButtonComponent = (props: Props) => {
  return (
    <TouchableHighlight
      {...props}
      testID={props.testID ?? 'ButtonComponent'}
      style={props.disabled ? styles.buttonDisabled : styles.button}
    >
      {!props.isLoading ? (
        <TextComponent
          color={props.disabled ? 'muted' : 'white'}
          textAlign="center" size="16"
          weight='bold'
        >
          {props.title}
        </TextComponent>
      ) : (
        <ActivityIndicator size={20} color={colors.white} />
      )}
    </TouchableHighlight>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 40,
    height: 60,
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: colors.lowlight,
    borderRadius: 40,
    height: 60,
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
