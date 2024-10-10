import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import React from 'react'
import IoniconsIcon from 'react-native-vector-icons/Ionicons'

import HomeStackNavigation, { HomeStackParamList } from './HomeStackNavigation';
import NotificationsStackNavigation, { NotificationParamList } from './NotificationsStackNavigation';
import SearchStackNavigation, { SearchStackParamList } from './SearchStackNavigation';
import FavoritiesStackNavigation, { FavoritiesStackParamList } from './FavoritiesStackNavigation';

export type BottomTabsParamList = {
  HOME_STACK: NativeStackNavigationProp<HomeStackParamList>,
  NOTIFICATIONS_STACK: NativeStackNavigationProp<NotificationParamList>,
  SEARCH_STACK: NativeStackNavigationProp<SearchStackParamList>,
  FAVORITIES_STACK: NativeStackNavigationProp<FavoritiesStackParamList>,
}

const Tab = createBottomTabNavigator<BottomTabsParamList>();

const BottomTabsNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName='HOME_STACK'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'HOME_STACK') {
            iconName = focused
              ? 'home-sharp'
              : 'home-outline';
          } else if (route.name === 'SEARCH_STACK') {
            iconName = focused 
              ? 'search-sharp' 
              : 'search-outline';
          } else if (route.name === 'FAVORITIES_STACK') {
            iconName = focused 
              ? 'heart-sharp' 
              : 'heart-outline';
          } else if (route.name === 'NOTIFICATIONS_STACK') {
            iconName = focused 
              ? 'notifications-sharp' 
              : 'notifications-outline';
          } else {
            // You can add more conditions here based on your routes
            throw new Error(`No icon found for route ${route.name}`);
          }

          return <IoniconsIcon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#0066CC',
        tabBarInactiveTintColor: '#A6A6A6',
        // tabBarHideOnKeyboard: true,
        tabBarLabelStyle: {
          fontWeight: '700',
          fontSize: 14,
          textTransform: 'capitalize',
        },
        headerShown: false,
      })}

    >
      <Tab.Screen
        name="HOME_STACK"
        component={HomeStackNavigation}
        options={{
          tabBarLabel: 'Inicio'
        }}
      />
      <Tab.Screen
        name="SEARCH_STACK"
        component={SearchStackNavigation}
        options={{
          tabBarLabel: 'Buscar'
        }}
      />
      <Tab.Screen
        name="FAVORITIES_STACK"
        component={FavoritiesStackNavigation}
        options={{
          tabBarLabel: 'Favoritos'
        }}
      />
      <Tab.Screen
        name="NOTIFICATIONS_STACK"
        component={NotificationsStackNavigation}
        options={{
          tabBarLabel: 'Notificaciones'
        }}
      />
    </Tab.Navigator>

  )
}

export default BottomTabsNavigation
