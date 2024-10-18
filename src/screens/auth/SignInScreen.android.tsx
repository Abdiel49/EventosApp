import { Dimensions, Platform, StyleSheet, View } from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { NavigationProp } from '@react-navigation/native';

import { AuthStackParamList } from '@app/navigation/stacks/AuthStack';

import FieldInputPassword from '@app/components/organisms/FieldInputPassword';
import ButtonComponent from '@app/components/molecules/ButtonComponent';
import SocialMediaBtn from '@app/components/organisms/SocialMediaBtn';
import TextComponent from '@app/components/atoms/TextComponent';
import ScreenView from '@app/components/molecules/ScreenView';
import FiledBase from '@app/components/organisms/FiledBase';

import { colors } from '@app/theme/colors';
import { Controller, useForm } from 'react-hook-form';
import { EMAIL_REGEX, PASSEORD_REGEX } from '@app/shared/constants/constants';
import { useAppDispatch, useAppSelector } from '@app/hooks/redux.hook';

type Props = {
  navigation: NavigationProp<AuthStackParamList>;
}

type LoginWithEmailPasswordType = {
  email: string;
  password: string;
}

const SignInScreen = (props: Props) => {
  GoogleSignin.configure({
    webClientId: '617952791355-hafqtqeaa4rd924ubq619g4igj45gj9r',
  });

  const {
    control,
    handleSubmit,
    setValue, 
    formState: { errors, isValid }
  } = useForm<LoginWithEmailPasswordType>({
    reValidateMode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const dispatch = useAppDispatch();
  const {error, isAuth, user, isLoading} = useAppSelector(state => state.auth)
 
  const handleSignUp = () => {
    props.navigation.navigate('SIGN_UP_SCREEN');
  };

  const handlePasswordRecovery = () => {
    props.navigation.navigate('PASSWORD_RECOVERY_SCREEN');
  };

  const handleGoogleSignIn = async () => {
    // await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // // Get the users ID token
    // const { idToken } = await GoogleSignin.signIn();

    // // Create a Google credential with the token
    // const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // // Sign-in the user with the credential
    // return auth().signInWithCredential(googleCredential);
  }

  return (
    <ScreenView>
      <TextComponent size="16">Ingresa tu email y contraseña</TextComponent>

      <View style={styles.section}>
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

        <ButtonComponent
          title="Acceder"
          disabled={!isValid}

        />

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
