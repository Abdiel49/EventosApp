import React from 'react'

import SearchScreen from '../screens/app/search/SearchScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type SearchStackParamList = {
  SEARCH_SCREEN: undefined,
}

const Stack = createNativeStackNavigator<SearchStackParamList>();

const SearchStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='SEARCH_SCREEN'
        component={SearchScreen}
        options={{
          title: "This is a Notifications screen"
        }}
      />
    </Stack.Navigator>
  )
}

export default SearchStackNavigation