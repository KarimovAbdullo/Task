import { createStackNavigator } from '@react-navigation/stack'
import { useColors } from 'hooks/useColors'
import React from 'react'
import R from 'res'
import ProfileScreen from 'screens/Profile/ProfileScreen'
import { getDefaultScreenOptions } from 'utils/navigation'

const ProfileStack = () => {
  const Stack = createStackNavigator()
  const colors = useColors()

  return (
    <Stack.Navigator screenOptions={getDefaultScreenOptions(colors)}>
      <Stack.Screen
        component={ProfileScreen}
        name={R.routes.SCREEN_PROFILE}
        options={{
          cardStyle: {
            backgroundColor: colors.backroundPrimary,
          },
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}

export default ProfileStack
