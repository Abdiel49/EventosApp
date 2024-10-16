import {
  ActivityIndicator,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons'

import TextComponent from '../atoms/TextComponent';

import { facebook_color_icon, google_color_icon } from '@app/utils/images';

import { colors } from '@app/theme/colors';

type Props = TouchableOpacityProps &  {
  title: string;
  isLoading?: boolean;
  socialType?: 'facebook' | 'google' | 'apple';
}

const SocialMediaBtn = (props: Props) => {
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.7}
      testID={props.testID ?? 'ButtonComponent'}
      style={[
        styles.button,
        props.disabled && styles.buttonDisabled,
        props.style,
      ]}
    >

      {props.isLoading ? (
        <ActivityIndicator color={colors.white} size={'small'} />
      ) : (
        <>
          {props.socialType === 'facebook' && (
            <Image source={facebook_color_icon} style={styles.logoIcon} />
          )}

          {props.socialType === 'google' && (
            <Image source={google_color_icon} style={styles.logoIcon} />
          )}
          {props.socialType === 'apple' && (
            <IonIcon name="logo-apple" style={styles.logoApple} />
          )}
          <TextComponent
            size="14"
            textAlign="center"
            color={props.disabled ? 'muted' : 'dark'}
          >
            {props.title}
          </TextComponent>
        </>
      )}
    </TouchableOpacity>
  );
};

export default SocialMediaBtn;

const styles = StyleSheet.create({
  button: {
    // flex: 1,
    backgroundColor: colors.white,
    borderRadius: 30,
    height: 48,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    borderColor: colors.muted,
    borderWidth: 0.5,
  },
  buttonDisabled: {
    // flex: 1,
    backgroundColor: colors.lowlight,
    borderRadius: 26,
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    borderColor: colors.muted,
    borderWidth: 0.5,
  },
  logoIcon: {
    width: 24,
    height: 24,
  },
  logoApple: {
    fontSize: 24,
    width: 24,
    height: 24,
    color: colors.black,
  },
});
