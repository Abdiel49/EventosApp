import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';

import FieldInputPassword from '@app/components/fields/FieldInputPassword';
import TextComponent from '@app/components/text/TextComponent';
import FiledBase from '@app/components/fields/FiledBase';

import { colors } from '@app/theme/colors';
import { NavigationProp } from '@react-navigation/native';
import { AuthStackParamList } from '@app/navigation/stacks/AuthStack';
import CheckboxLabel from '@app/components/checks/CheckboxLabel';
import FieldPhoneInput from '@app/components/fields/FieldPhoneInput';
import ButtonComponent from '@app/components/buttons/ButtonComponent';
import ScreenView from '@app/components/screens/ScreenView';

type Props = {
  navigation: NavigationProp<AuthStackParamList>;
}

const SignUpScreen = (props: Props) => {
  const handleGoToSignIn = () => {
    props.navigation.navigate('SIGN_IN_SCREEN');
  };

  const handleSubmitRegister = () => {
    props.navigation.navigate('SIGN_IN_SCREEN');
  };

  return (
    <ScreenView>
      <TextComponent size="16">Ingresa tu email y contraseña</TextComponent>

      <View style={styles.section}>
        <FiledBase
          input
          type="default"
          placeholder={'Nombre'}
        />

        <FiledBase
          input
          type="default"
          placeholder={'Apellidos'}
        />

        <FiledBase
          input
          type="email"
          autoCapitalize="none"
          placeholder={'Email'}
        />

        <FieldPhoneInput />

        <FieldInputPassword
          input
          // label="Contraseña"
          type="password"
          placeholder={'Contraseña'}
          autoCapitalize="none"
        />

        <View style={{marginTop: 8}}>
          <CheckboxLabel
            label="Acepto los terminos condiciones y la Politica de privacidad"
            active={false}
          />
        </View>
      </View>

      <View style={styles.rowContentCenter}>
        <TextComponent
          size="14"
          textAlign="center"
        >
          ¿Ya tienes una cuenta?
        </TextComponent>
        <TextComponent
          size="14"
          color="primary"
          weight="bold"
          textAlign="center"
          onPress={handleGoToSignIn}
        >
          Inicia sesión
        </TextComponent>
      </View>

      <ButtonComponent
        title="Regístrarme"
        disabled={false}
        onPress={handleSubmitRegister}
      />
    </ScreenView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scroll: {},
  scrollContent: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 24,
    paddingVertical: 36,
    gap: 36,
  },
  section: {
    gap: 14,
  },
  rowContentCenter: {
    gap: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
  },
});
