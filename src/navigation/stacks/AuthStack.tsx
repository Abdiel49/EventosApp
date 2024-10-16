import React from 'react';
import { Image, Platform, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import SignInScreen from '@app/screens/auth/SignInScreen';
import SignUpScreen from '@app/screens/auth/SignUpScreen';
import PasswordRecoveryScreen from '@app/screens/auth/PasswordRecoveryScreen';

import { colors } from '@app/theme/colors';
// import { app_logo, chevron_left__white_icon } from '@app/utils/images';
import CodeValidationScreen from '@app/screens/auth/CodeValidationScreen';
import NewPasswordScreen from '@app/screens/auth/NewPasswordScreen';
import SignInScreen from '@app/screens/auth/SignInScreen';

export type AuthStackParamList = {
  SIGN_IN_SCREEN: undefined;
  SIGN_UP_SCREEN: undefined;
  PASSWORD_RECOVERY_SCREEN: undefined;
  CODE_VALIDATION_SCREEN: undefined;
  NEW_PASSWORD_SCREEN: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="SIGN_IN_SCREEN">
      <Stack.Screen
        name="SIGN_IN_SCREEN"
        component={SignInScreen}
        options={{
          headerStyle:{
            backgroundColor: colors.primary,
          },
          // headerBackImageSource: chevron_left__white_icon,
          headerShadowVisible: false,
          headerBlurEffect: 'regular',
          headerTitleAlign: 'center',
          headerTintColor: colors.white,
          // eslint-disable-next-line react/no-unstable-nested-components
          // headerTitle: () => <Image source={app_logo} style={styles.appLogo} />,
          headerTitle: "Iniciar sesión",
        }}
      />

      <Stack.Screen
        name="SIGN_UP_SCREEN"
        component={SignUpScreen}
        options={{
          headerStyle:{
            backgroundColor: colors.primary,
          },
          headerTintColor: colors.white,
          // headerBackImageSource: chevron_left__white_icon,
          headerShadowVisible: false,
          headerBlurEffect: 'regular',
          headerTitleAlign: 'center',
          // eslint-disable-next-line react/no-unstable-nested-components
          // headerTitle: () => <Image source={app_logo} style={styles.appLogo} />,
          headerTitle: "Registrarse",
        }}
      />

      <Stack.Screen
        name="PASSWORD_RECOVERY_SCREEN"
        component={PasswordRecoveryScreen}
        options={{
          headerStyle:{
            backgroundColor: colors.primary,
          },
          headerTintColor: colors.white,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 18,
            // fontFamily: 'Strawford-Regular',
          },
          // headerBackImageSource: chevron_left__white_icon,
          headerShadowVisible: false,
          headerBlurEffect: 'regular',
          headerTitleAlign: 'center',
          headerTitle: '¿Olvidaste tu contraseña?',
        }}
      />

      <Stack.Screen
        name="CODE_VALIDATION_SCREEN"
        component={CodeValidationScreen}
        options={{
          headerStyle:{
            backgroundColor: colors.primary,
          },
          headerTintColor: colors.white,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 18,
            // fontFamily: 'Strawford-Regular',
          },
          // headerBackImageSource: chevron_left__white_icon,
          headerShadowVisible: false,
          headerBlurEffect: 'regular',
          headerTitleAlign: 'center',
          headerTitle: 'Verifica tu correo',
        }}
      />

      <Stack.Screen
        name="NEW_PASSWORD_SCREEN"
        component={NewPasswordScreen}
        options={{
          headerStyle:{
            backgroundColor: colors.primary,
          },
          headerTintColor: colors.white,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 18,
            // fontFamily: 'Strawford-Regular',
          },
          // headerBackImageSource: chevron_left__white_icon,
          headerShadowVisible: false,
          headerBlurEffect: 'regular',
          headerTitleAlign: 'center',
          headerTitle: 'Nueva contraseña',
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;


const ICON_HEIGHT = 24;
const HEADER_HEIGHT = Platform.OS === 'ios' ? ICON_HEIGHT * 2 : ICON_HEIGHT;

const styles = StyleSheet.create({
  appLogo: {
    height: HEADER_HEIGHT,
    maxWidth: 200,
    resizeMode: 'center',
    tintColor: colors.white,
    width: '100%',
    // alignSelf: 'center',
    // flexGrow: 1,
    // backgroundColor:'red',
  },
});
