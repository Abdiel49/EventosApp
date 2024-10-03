
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/app/home/HomeScreen';

export type HomeStackParamList = {
  HOME_SCREEN: undefined,
}

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='HOME_SCREEN'>
      <Stack.Screen
        name="HOME_SCREEN"
        component={HomeScreen}
        options={{
          title: "This is a Home screen"
        }}
      />
  </Stack.Navigator>
  )
}

export default HomeStackNavigation
