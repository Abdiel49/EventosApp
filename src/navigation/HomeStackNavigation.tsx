
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import HomeScreen from '../screens/app/home/HomeScreen';
// import HomeScreen from '@app/screens/HomeScreen';
import CreateCategoryScreen from '@app/screens/app/home/CreateCategoryScreen';
import HomeScreen from '@app/screens/app/home/HomeScreen';
import CreateEventScreen from '@app/screens/app/home/CreateEventScreen';

export type HomeStackParamList = {
  HOME_SCREEN: undefined;
  CREATE_CATEGORY: undefined;
  CREATE_EVENT_SCREEN: undefined;
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
      <Stack.Screen
        name="CREATE_CATEGORY"
        component={CreateCategoryScreen}
        options={{
          title: "Crear nueva categoria"
        }}
      />
      <Stack.Screen
        name="CREATE_EVENT_SCREEN"
        component={CreateEventScreen}
        options={{
          title: "Crear nuevo evento"
        }}
      />
  </Stack.Navigator>
  )
}

export default HomeStackNavigation
