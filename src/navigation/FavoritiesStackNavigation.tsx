import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import FavoritesScreen from '../screens/app/favorites/FavoritesScreen'

export type FavoritiesStackParamList = {
  FAVORITES_SCREEN: undefined,
}

const Stack = createNativeStackNavigator<FavoritiesStackParamList>()

const FavoritiesStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='FAVORITES_SCREEN'
        component={FavoritesScreen}
        options={{
          title: "This is a Favorities screen"
        }}
      />
    </Stack.Navigator>
  )
}

export default FavoritiesStackNavigation