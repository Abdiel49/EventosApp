import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from '../screens/WelcomeScreen';
import EventDetailScreen from '../screens/EventDetailScreen';
import { colors } from '../theme/colors';
import HomeScreen from '../screens/HomeScreen';

/**
 * Asignamos el tipo de dato Data
 */
export interface Data {
  name: string
  lastName: string
  course: string
}

/**
 * - Asignamos el tipo de dato para la pantalla de 'EventDetailScreen' con el tipo 'Data'
 * - la asignacion se hace requerida por lo que siempre que se navege a 'EventDetailScreen'
 * debemos mandar el campo de data o nos data un error.
 * - Si quetemos que sea obcional el tipo 'Data' en la pantalla de 'EventDetailScreen'
 * podemos decir tambien podria ser 'undefined': EventDetailScreen: Data | undefined,
 */
export type RootNavigationParamList = {
  WelcomeScreen: undefined;
  EventDetailScreen: Data;
  HomeScreen: undefined;
}

const Stack = createNativeStackNavigator<RootNavigationParamList>();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='WelcomeScreen'>
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{
            headerShown: true,
            title: 'Welcome',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 24,
              fontWeight: 'bold',
              color: colors.red,
            },
            // headerLeft: (props) => {
            //   return (
            //     <Text
            //       style={{
            //         fontSize: 24,
            //         fontWeight: 'bold',
            //         color: colors.red,
            //         marginLeft: 16,
            //       }}
            //     >
            //       {'<'}
            //     </Text>
            //   )
            // },
            headerRight: (prop) => {
              return (
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: 'bold',
                    color: colors.red,
                    marginLeft: 16,
                  }}
                >
                  {'<'}
                </Text>
              )
            },
          }}
        />
        <Stack.Screen
          name="EventDetailScreen"
          component={EventDetailScreen}
          options={{
            headerShown: true,
            title: 'Evento',
            // headerBackTitle: '',
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: true,
            title: 'Eventos',
            // headerBackTitle: '',
            headerBackTitleVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation