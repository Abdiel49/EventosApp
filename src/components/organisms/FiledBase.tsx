import { Image, ImageSourcePropType, Pressable, StyleSheet, View } from 'react-native';
import React, { PropsWithChildren } from 'react';

// import TextComponent from '../text/TextComponent';

import { colors } from '@app/theme/colors';
import TextInputComponent, { TextInputComponentProps } from '../atoms/TextInputComponent';
import TextComponent from '../atoms/TextComponent';

export type FiledBaseProps = PropsWithChildren & TextInputComponentProps & {
  label?: string | React.ReactNode,
  value?: string | React.ReactNode,
  placeholder?: string | React.ReactNode,
  leftImage?: ImageSourcePropType,
  rightImage?: ImageSourcePropType,
  testID?: string,
  onPress?: () => void;
  input?: boolean;
  isFocused?: boolean;
  onChangeText?: (text: string) => void;
}

const FiledBase = (props: FiledBaseProps) => {
  return (
    <Pressable
      style={[
        styles.filterContainer,
        props.isFocused && styles.focused,
      ]}
      onPress={props.onPress}
    >
      <View style={styles.row}>
        { props.leftImage && (
          <View>
            <Image source={props.leftImage} style={styles.filterIcon} />
          </View>
        )}
        <View>
          {!!props.label && (
            <TextComponent color="muted" size="12" >{props.label}</TextComponent>
          )}
          {!props.input && (
            <TextComponent color="dark" size="14" style={styles.input} >{props.value ?? ''}</TextComponent>
          )}
          {!!props.input && (
            <TextInputComponent
              {...props}
              placeholder={props.placeholder}
              type={props.type}
              onChangeText={props.onChangeText}
              style={styles.input}
            />
          )}
        </View>
        { props.rightImage && (
          <View>
            <Image source={props.rightImage} style={styles.filterIcon} />
          </View>
        )}
      </View>
      {props.children}
    </Pressable>
  );
};

export default FiledBase;

const styles = StyleSheet.create({
  filterContainer: {
    borderWidth: 0.5,
    borderColor: colors.muted,
    borderRadius: 16,
    backgroundColor: colors.light,
  },
  row: {
    gap: 12,
    height: 58,
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: colors.primary,
  },
  filterTitle: {
    color: colors.muted,
    fontWeight: '400',
    fontSize: 12,
  },
  filterDescription: {
    color: colors.dark,
    fontWeight: '400',
    fontSize: 14,
  },
  input: {
    // height: 18,
  },
  focused: {
    borderWidth: 0.5,
    borderColor: colors.primary,
    borderRadius: 16,
    backgroundColor: colors.light,
  },
});
