import { StyleSheet, View } from 'react-native';
import React from 'react';
import { NavigationProp } from '@react-navigation/native';

import { AuthStackParamList } from '@app/navigation/stacks/AuthStack';

import FieldInputPassword from '@app/components/organisms/FieldInputPassword';
import ButtonComponent from '@app/components/molecules/ButtonComponent';
import FieldPhoneInput from '@app/components/organisms/FieldPhoneInput';
import TextComponent from '@app/components/atoms/TextComponent';
import CheckboxLabel from '@app/components/organisms/checks/CheckboxLabel';
import ScreenView from '@app/components/molecules/ScreenView';
import FiledBase from '@app/components/organisms/FiledBase';

import { colors } from '@app/theme/colors';
import { Controller, useForm } from 'react-hook-form';

type Props = {
  navigation: NavigationProp<AuthStackParamList>;
}

const SignUpScreen = (props: Props) => {
  const {control, handleSubmit, formState: { errors, isValid }} = useForm({
    reValidateMode: 'onChange',
    // defaultValues: {
    //   name: '',
    //   icon: '',
    //   color: '',
    // },
  });

  const handleGoToSignIn = () => {
    props.navigation.navigate('SIGN_IN_SCREEN');
  };

  const handleSubmitRegister = () => {
    // CREATE USER AND NAVIGATE TO SIGN_IN_SCREEN
    props.navigation.navigate('SIGN_IN_SCREEN');
  };

  return (
    <ScreenView>
      <TextComponent size="16">Ingresa tu email y contraseña</TextComponent>

      <View style={styles.section}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <FiledBase
              input
              type='default'
              label="Nombres"
              placeholder={'Nombres'}
              onBlur={onBlur}
              value={value}
              onChangeText={onChange}
            />
          )}
          name="name"
        />
        {errors.name && <TextComponent color='primary'>This is required.</TextComponent>}

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <FiledBase
              input
              label="Apellidos"
              type='default'
              placeholder={'Apellidos'}
              onBlur={onBlur}
              value={value}
              onChangeText={onChange}
            />
          )}
          name="lastname"
        />
        {errors.lastname && <TextComponent color='primary'>This is required.</TextComponent>}

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <FiledBase
              input
              type="email"
              autoCapitalize="none"
              placeholder={'Email'}
              onBlur={onBlur}
              value={value}
              onChangeText={onChange}
            />
          )}
          name="email"
        />
        {errors.email && <TextComponent color='primary'>This is required.</TextComponent>}


        <FieldPhoneInput  />

        
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
