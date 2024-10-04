
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NotificationsScreen from '../screens/app/notifications/NotificationsScreen';

export type NotificationParamList = {
  NOTIFICATIONS_SCREEN: undefined,
}

const Stack = createNativeStackNavigator<NotificationParamList>();

const NotificationsStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='NOTIFICATIONS_SCREEN'
        component={NotificationsScreen}
        options={{
          title: "This is a Notifications screen"
        }}
      />
    </Stack.Navigator>    
  )
}

export default NotificationsStackNavigation