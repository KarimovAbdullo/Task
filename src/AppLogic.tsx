import { useAppState } from 'hooks/useAppState'
import React, { ReactChild, ReactElement, ReactNode, useEffect } from 'react'
import { AppState, AppStateStatus } from 'react-native'
import RNBootSplash from 'react-native-bootsplash'

interface IAppLogic {
  children: ReactNode | ReactChild | ReactElement
}

const AppLogic = (props: IAppLogic) => {
  const appState = useAppState()

  useEffect(() => {
    const subscription = AppState.addEventListener(
      'change',
      handleAppStateChange,
    )

    return () => {
      subscription.remove()
    }
  }, [])

  // App state
  useEffect(() => {}, [appState])

  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide({ fade: true })
    }, 500)
  })

  const handleAppStateChange = (appStateProps: AppStateStatus) => {
    if (appStateProps === 'active') {
    }
  }

  return <>{props.children}</>
}

export default AppLogic
