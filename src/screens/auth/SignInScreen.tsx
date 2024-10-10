import { StyleSheet, View } from 'react-native';
import React from 'react';
import { NavigationProp } from '@react-navigation/native';

import { AuthStackParamList } from '@app/navigation/stacks/AuthStack';

import ScreenView from '@app/components/screens/ScreenView';
import ButtonComponent from '@app/components/buttons/ButtonComponent';
import TextComponent from '@app/components/text/TextComponent';
import FiledBase from '@app/components/fields/FiledBase';
import SocialMediaBtn from '@app/components/buttons/SocialMediaBtn';
import FieldInputPassword from '@app/components/fields/FieldInputPassword';

import { colors } from '@app/theme/colors';
import { mail_outline_icon } from '@app/utils/images';

type Props = {
  navigation: NavigationProp<AuthStackParamList>;
}

const SignInScreen = (props: Props) => {
  const handleSignUp = () => {
    props.navigation.navigate('SIGN_UP_SCREEN');
  };

  const handlePasswordRecovery = () => {
    props.navigation.navigate('PASSWORD_RECOVERY_SCREEN');
  };

  return (
    <ScreenView>
      <TextComponent size="16">Ingresa tu email y contraseña</TextComponent>

      <View style={styles.section}>
        <FiledBase
          input
          label="Email"
          type="email"
          placeholder={'Email'}
          autoCapitalize="none"
          leftImage={mail_outline_icon}
        />
        <FieldInputPassword
          input
          label="Contraseña"
          type="password"
          placeholder={'Contraseña'}
          autoCapitalize="none"
        />
        <ButtonComponent title="Acceder" disabled={false} />

        <View style={styles.pv12}>
          <TextComponent
            size="14"
            textAlign="center"
            onPress={handlePasswordRecovery}
          >
            ¿Olvidaste tu contraseña?
          </TextComponent>
        </View>

        <View style={styles.rowContent}>
          <View style={styles.divisor} />
          <TextComponent size="14" textAlign="center">o</TextComponent>
          <View style={styles.divisor} />
        </View>

        <SocialMediaBtn
          title="Continuar con Google"
          socialType="google"
        />
        <SocialMediaBtn
          title="Continuar con Facebook"
          socialType="facebook"
        />

      </View>

      <View style={styles.rowContentCenter}>
        <TextComponent
          size="14"
          textAlign="center"
        >
          ¿No tienes una cuenta?
        </TextComponent>
        <TextComponent
          size="14"
          color="primary"
          weight="bold"
          textAlign="center"
          onPress={handleSignUp}
        >
          Regístrate
        </TextComponent>
      </View>
    </ScreenView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  scroll: {},
  scrollContent: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 24,
    paddingVertical: 40,
    gap: 40,
  },
  section: {
    gap: 12,
    top: -8,
  },
  rowContent: {
    gap: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    height: 51,
  },
  divisor: {
    height: 1,
    backgroundColor: colors.lowlight,
    flex: 1,
  },
  rowContentCenter: {
    gap: 12,
    height: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
  },
  pv12: {
    height: 34,
    justifyContent: 'center',
  },
});
