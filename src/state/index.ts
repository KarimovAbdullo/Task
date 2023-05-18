import {
  Action,
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
} from 'redux'
import { persistStore } from 'redux-persist'
import thunk, { ThunkAction } from 'redux-thunk'

import Reactotron from '../reactotron'
import userReducer from './user/reducer'

const rootReducer = combineReducers({
  user: userReducer,
})

const middlewares = [thunk]

const composeEnhancers =
  // @ts-ignore
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? // @ts-ignore
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(...middlewares),
    // @ts-ignore
    Reactotron.createEnhancer(),
  ),
)

const persistor = persistStore(store)

export { persistor, store }

export type RootState = ReturnType<typeof rootReducer>

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
