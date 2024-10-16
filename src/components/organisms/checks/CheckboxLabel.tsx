import { StyleSheet, View } from 'react-native';
import React from 'react';

import TextComponent from '@app/components/atoms/TextComponent';
import CheckboxComponent from './CheckboxComponent';

type Props = {
  active?: boolean;
  onChange?: (value: boolean) => void;
  label?: string;
};

const CheckboxLabel = (props: Props) => {
  return (
    <View style={styles.contend}>
      <CheckboxComponent isActive={props.active} onChange={props.onChange} />
      <TextComponent size="14" color="dark" >{props.label ?? ''}</TextComponent>
    </View>
  );
};

export default CheckboxLabel;

const styles = StyleSheet.create({
  contend: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});
