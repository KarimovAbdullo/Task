import { createStackNavigator } from '@react-navigation/stack'
import { useColors } from 'hooks/useColors'
import React from 'react'
import R from 'res'
import CatalogScreen from 'screens/Catalog/CatalogScreen'
import { getDefaultScreenOptions } from 'utils/navigation'

const CatalogStack = () => {
  const Stack = createStackNavigator()
  const colors = useColors()

  return (
    <Stack.Navigator screenOptions={getDefaultScreenOptions(colors)}>
      <Stack.Screen
        component={CatalogScreen}
        name={R.routes.SCREEN_CATALOG}
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

export default CatalogStack
