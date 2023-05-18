import { useColors } from 'hooks/useColors'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { Text } from 'react-native'
import { Button } from 'react-native-paper'

import stylesConfig from './LoginButton.style'

interface IProps {
  text: string | string[]
  onPress: () => void
  style?: object
  textStyle?: object
}

export const LoginButton = ({ text, onPress, textStyle, style }: IProps) => {
  const styles = useStyles(stylesConfig)
  const colors = useColors()

  return (
    <Button
      onPress={onPress}
      style={[styles.button, style]}
      buttonColor={colors.main}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </Button>
  )
}
