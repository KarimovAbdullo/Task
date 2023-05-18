import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useColors } from 'hooks/useColors'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React, { useEffect } from 'react'
import { Platform } from 'react-native'
import { s, vs } from 'react-native-size-matters'
import R from 'res'
import { createStyles } from 'utils/createStyles'
import { getTabRouteById } from 'utils/navigation'

import CatalogStack from './CatalogStack'
import HomeStack from './HomeStack'
import ProfileStack from './ProfileStack'

interface IProps {
  route: {
    params: {
      tab: string
    }
  }
}

const Tabs: React.FC<IProps> = ({ route }) => {
  const navigation = useSmartNavigation()

  const styles = useStyles(stylesConfig)
  const colors = useColors()

  useEffect(() => {
    if (!route?.params?.tab) {
      return
    }
    // @ts-ignore
    navigation.navigate(getTabRouteById(route?.params?.tab), {})
  }, [route?.params?.tab])

  const TabsNavigator = createBottomTabNavigator()

  return (
    <TabsNavigator.Navigator
      screenOptions={({ navigation: navigationProps }) => {
        return {
          headerShown: true,
          tabBarHideOnKeyboard: true,
          tabBarStyle: [
            styles.barStyle,
            { backgroundColor: colors.backroundPrimary },
          ],
          tabBarItemStyle: {
            paddingVertical: vs(12),
            top: vs(9),
          },
          tabBarLabelStyle: {
            marginTop: vs(10),
            fontSize: s(11),
            paddingBottom: s(5),
            fontFamily: R.fonts.SofiaPro.medium,
            color: navigationProps.isFocused()
              ? colors.tanla
              : colors.textSecondary,
          },
        }
      }}>
      <TabsNavigator.Screen
        options={{
          tabBarLabel: 'Главная',
          headerShown: false,
          // tabBarIcon: ({ focused }) =>
          //   focused ? (
          //     <R.icons.HomeIcon
          //       color={colors.tanla}
          //       bg={colors.backroundPrimary}
          //     />
          //   ) : (
          //     <R.icons.HomeIcon
          //       color={colors.backroundSecondary}
          //       bg={colors.backroundSecondary}
          //     />
          //   ),
        }}
        name={R.routes.STACK_HOME}
        component={HomeStack}
      />

      <TabsNavigator.Screen
        options={{
          headerShown: false,
          headerTitle: 'Каталог',
          tabBarLabel: 'Категории',
          // tabBarIcon: ({ focused }) =>
          //   focused ? (
          //     <R.icons.GridIcon
          //       color={colors.tanla}
          //       bg={colors.backroundPrimary}
          //     />
          //   ) : (
          //     <R.icons.GridIcon
          //       color={colors.backroundSecondary}
          //       bg={colors.backroundSecondary}
          //     />
          //   ),
        }}
        name={R.routes.STACK_CATALOG}
        component={CatalogStack}
      />

      <TabsNavigator.Screen
        options={{
          headerTitleStyle: styles.headerTitle,
          headerStyle: styles.headerStyle,
          headerTitle: 'Профиль',
          tabBarLabel: 'Профиль',
          // tabBarIcon: ({ focused }) =>
          //   focused ? (
          //     <R.icons.ProfileIcon
          //       color={colors.tanla}
          //       bg={colors.backroundPrimary}
          //     />
          //   ) : (

          //   ),
        }}
        name={R.routes.STACK_PROFILE}
        component={ProfileStack}
      />
    </TabsNavigator.Navigator>
  )
}

const stylesConfig = createStyles(colors => ({
  area: {
    flex: 1,
  },
  barStyle: {
    borderTopStartRadius: '15@s',
    borderTopEndRadius: '15@s',
    height: Platform.select({
      ios: '86@s',
      android: '64@s',
    }),

    shadowColor: 'rgb(48, 48, 48)',
    shadowOpacity: 6,
    shadowRadius: '20@s',
    shadowOffset: {
      height: '10@vs',
    },
    margin: 0,
    padding: 0,
    borderTopWidth: 0,
  },
  iconActive: {
    width: '50@vs',
    height: '50@vs',
    borderRadius: '8@s',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.red,
  },
  headerStyle: {
    elevation: 5,
    shadowRadius: '3@s',
    borderBottomWidth: '0@s',
    shadowColor: 'grey',
    height: '60@vs',
    backgroundColor: colors.backroundPrimary,
  },
  headerTitle: {
    fontSize: '18@s',
    fontWeight: '600',
    color: colors.text,
  },
}))

export default Tabs
