import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Tabs from 'navigation/Tabs'
import React, { useEffect, useRef } from 'react'
import R from 'res'
import { TTheme } from 'res/theme'
import DetailScreen from 'screens/DetailScreen'
import HomeScreen from 'screens/Home'
import ProfileScreen from 'screens/Profile/ProfileScreen'
import { TNavigationParams } from 'types/navigation'

const Navigator = ({ theme }: { theme: TTheme }) => {
  const RootStack = createStackNavigator()
  const navigationRef = useNavigationContainerRef<TNavigationParams>()
  const routeNameRef = useRef()

  useEffect(() => {}, [])

  return (
    <NavigationContainer
      theme={theme}
      ref={navigationRef}
      onReady={() => {
        // @ts-ignore
        routeNameRef.current = navigationRef.getCurrentRoute()?.name
      }}>
      <BottomSheetModalProvider>
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
          <RootStack.Screen
            name={R.routes.ROOT_MAIN}
            //@ts-ignore
            component={Tabs}
          />
          <RootStack.Screen
            component={HomeScreen}
            name={R.routes.SCREEN_HOME}
            options={{
              headerShown: false,
              headerTitleAlign: 'center',
              headerBackTitleVisible: false,
            }}
          />

          <RootStack.Screen
            component={ProfileScreen}
            name={R.routes.SCREEN_PROFILE}
            options={{
              headerShown: false,
              headerTitleAlign: 'center',
              headerBackTitleVisible: false,
            }}
          />

          <RootStack.Screen
            //@ts-ignore
            component={DetailScreen}
            name={R.routes.SCREEN_DETAIL}
            options={{
              title: 'Detail',
              headerShown: true,
              headerTitleAlign: 'center',
              headerBackTitleVisible: false,
              cardStyle: { backgroundColor: 'white' },
              // headerBackImage: () => (
              //   <View
              //     style={{
              //       marginLeft: s(10),
              //     }}>
              //     {/*<R.icons.CarrotIcon size={24} direction="left" />*/}
              //   </View>
              // ),
            }}
          />
        </RootStack.Navigator>
      </BottomSheetModalProvider>
    </NavigationContainer>
  )
}

export default Navigator
