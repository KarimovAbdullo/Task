import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'

import stylesConfig from './HomeScreen.styles'

const HomeScreen = () => {
  const styles = useStyles(stylesConfig)

  return (
    <SafeAreaView>
      <View style={styles}>
        <Text>Добро пожаловать!</Text>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
