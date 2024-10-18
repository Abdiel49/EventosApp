import { Alert, StyleSheet, View } from 'react-native';
import React from 'react';
import { NavigationProp } from '@react-navigation/native';
import { Controller, useForm } from 'react-hook-form';

import { AuthStackParamList } from '@app/navigation/stacks/AuthStack';
import { useAppDispatch, useAppSelector } from '@app/hooks/redux.hook';

import FieldInputPassword from '@app/components/organisms/FieldInputPassword';
import ButtonComponent from '@app/components/molecules/ButtonComponent';
import FieldPhoneInput from '@app/components/organisms/FieldPhoneInput';
import TextComponent from '@app/components/atoms/TextComponent';
import CheckboxLabel from '@app/components/organisms/checks/CheckboxLabel';
import ScreenView from '@app/components/molecules/ScreenView';
import FiledBase from '@app/components/organisms/FiledBase';

import { colors } from '@app/theme/colors';
import { EMAIL_REGEX, PASSEORD_REGEX } from '@app/shared/constants/constants';
import { ICreateUser } from '@app/types';
import { signUpUser } from '@app/store/slices/auth';

type Props = {
  navigation: NavigationProp<AuthStackParamList>;
}

type RegisterFormData = {
  name: string;
  lastname: string;
  email: string;
  password: string;
  terms: boolean;
  phoneNumber: string;
  countryCode: string;
};

const SignUpScreen = (props: Props) => {
  const {
    control,
    handleSubmit,
    setValue, 
    formState: { errors, isValid }
  } = useForm<RegisterFormData>({
    reValidateMode: 'onBlur',
    defaultValues: {
      name: '',
      lastname: '',
      email: '',
      password: '',
      terms: false,
      phoneNumber: '',
      countryCode: '+591'
    },
  });

  const dispatch = useAppDispatch();
  const {error, isAuth, user, isLoading} = useAppSelector(state => state.auth)

  const handleGoToSignIn = () => {
    props.navigation.navigate('SIGN_IN_SCREEN');
  };

  const handleSubmitRegister = async (values: RegisterFormData) => {
    try {
      const userC: ICreateUser = {
        countryCode: values.countryCode,
        email: values.email.trim(),
        password: values.password.trim(),
        phoneNumber: values.phoneNumber.replaceAll(' ', ''),
        terms: !!values.terms,
        name: values.name.trim(),
        lastname: values.lastname.trim(),
      }

      await dispatch(signUpUser(userC))

      Alert.alert('Registro exitoso', 'Usuario creado y perfil actualizado');
      // Navegar a la pantalla de inicio de sesión o dashboard
      // props.navigation.navigate('SIGN_IN_SCREEN');
    } catch (error) {
      console.error('Error creando el usuario:', error);
      Alert.alert('Error', `${error}`);
    }
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
            pattern: EMAIL_REGEX,
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

        <Controller
          control={control}
          name="phoneNumber"
          rules={{
            required: 'El número de teléfono es obligatorio',
          }}
          render={({ field: { onChange, value } }) => (
            <FieldPhoneInput
              value={value}
              onChangeText={onChange}
              onChangeCountry={(country) => {
                setValue('countryCode', country.callingCode);
              }}
            />
          )}
        />
        {errors.phoneNumber && (
          <TextComponent color='primary'>
            {errors.phoneNumber.message}
          </TextComponent>
        )}
        
        <Controller
          control={control}
          rules={{
            required: true,
            pattern: PASSEORD_REGEX,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <FieldInputPassword
              input
              type="password"
              placeholder={'Contraseña'}
              autoCapitalize="none"
              onBlur={onBlur}
              value={value}
              onChangeText={onChange}
            />
          )}
          name="password"
        />
        {errors.password && <TextComponent color='primary'>This is required.</TextComponent>}

        <View style={{marginTop: 8, width: '90%'}}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <CheckboxLabel
              label="Acepto los terminos condiciones y la Politica de privacidad"
              active={value}
              onChange={onChange}
            />
          )}
          name="terms"
        />
        {errors.terms && <TextComponent color='primary'>This is required.</TextComponent>}

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
        disabled={!isValid}
        isLoading={isLoading}
        onPress={handleSubmit(handleSubmitRegister)}
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
