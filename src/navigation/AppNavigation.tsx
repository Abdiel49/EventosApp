import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';

import BottomTabsNavigation, { BottomTabsParamList } from './BottomTabsNavigation';
import WelcomeScreen from '../screens/WelcomeScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


export type RootStackParamList = {
  WelcomeScreen: undefined,
  BottomTabsNavigation: NativeStackNavigationProp<BottomTabsParamList>
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='BottomTabsNavigation'
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="BottomTabsNavigation"
          component={BottomTabsNavigation}
        />
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{
            title: "This is a welcome screen"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation