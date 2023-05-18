import AsyncStorage from '@react-native-community/async-storage'
import { AnyAction } from 'redux'
import { PersistConfig, persistReducer } from 'redux-persist'
import {
  FETCH_USER_ERROR,
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
  SET_USER,
  SIGN_OUT,
} from 'state/user/consts'
import { UserState } from 'state/user/types'

const initialState: UserState = {
  // @ts-ignore
  user: {},
  loading: false,
}

const reducer = (state = initialState, action: AnyAction): UserState => {
  const { payload } = action

  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: payload,
      }
    case FETCH_USER_START:
      return { ...state, loading: true }
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        user: payload,
        loading: false,
      }
    case FETCH_USER_ERROR:
      return { ...state, loading: false }
    case SIGN_OUT:
      // @ts-ignore
      return { user: {}, loading: false }
    default:
      return state
  }
}

const persistConfig: PersistConfig<UserState> = {
  key: 'auth',
  storage: AsyncStorage,
  whitelist: ['user'],
}

export default persistReducer(persistConfig, reducer)
