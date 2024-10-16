import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabsNavigation, { BottomTabsParamList } from './BottomTabsNavigation';
import AuthStack from './stacks/AuthStack';

export type AuthStackParamList = {
  AUTH_STACK_PARAM_LIST: NativeStackNavigationProp<any>;
}

export type RootStackParamList = {
  BottomTabsNavigation: NativeStackNavigationProp<BottomTabsParamList>
}

const Stack = createNativeStackNavigator<RootStackParamList>();
const AStack = createNativeStackNavigator<AuthStackParamList>();

const AppNavigation = () => {

  const IS_SIGNING = false;

  if (!IS_SIGNING) {
    return (
      <NavigationContainer>
        <AStack.Navigator>
          <AStack.Screen
            name="AUTH_STACK_PARAM_LIST"
            component={AuthStack}
            options={{headerShown: false}}
          />
        </AStack.Navigator>
      </NavigationContainer>
    );
  }

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
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation