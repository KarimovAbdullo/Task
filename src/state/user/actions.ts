import { apiLoginUser, registerUser } from 'api/userApi'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AxiosError } from 'axios'
import { Dispatch } from 'redux'
import {
  FETCH_USER_ERROR,
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
  SIGN_OUT,
} from 'state/user/consts'
import { IUser } from 'types/data'

const fetchUserStart = () => ({
  type: FETCH_USER_START,
})

export const fetchUserSuccess = (user: IUser) => ({
  type: FETCH_USER_SUCCESS,
  payload: user,
})

const fetchEnd = () => ({
  type: FETCH_USER_ERROR,
})

export const signOut = () => ({
  type: SIGN_OUT,
  payload: null,
})

/**
 * login user
 * @returns
 */
export const loginUser =
  (
    data: IUser,
    onSuccess: (response: IUser) => void,
    setError?: (value: string) => void,
  ) =>
  async (dispatch: Dispatch) => {
    try {
      dispatch(fetchUserStart())
      const response = await apiLoginUser(data)

      if (response) {
        dispatch(fetchUserSuccess(response))
        onSuccess(response)
      }
      // @ts-ignore
    } catch (e: AxiosError) {
      console.log("User haven't been loaded!", e)
      dispatch(fetchEnd())
      if (setError) {
        setError(e?.response?.data?.message)
      }
    }
  }

/**
 * SignOut
 * @returns
 */
export const signOutUser = () => async (dispatch: Dispatch) => {
  try {
    dispatch(signOut())
  } catch {
    console.log('Error signOutUser')
  }
}

/**
 * SignUp
 * @returns
 */
export const signUpUser =
  (data: IUser, onSuccess: () => void, setError?: (value: string) => void) =>
  async (dispatch: Dispatch) => {
    try {
      dispatch(fetchUserStart())
      const response = await registerUser(data)

      if (response) {
        dispatch(fetchUserSuccess(response))
        onSuccess()
      }
      // @ts-ignore
    } catch (e: AxiosError) {
      console.log("User haven't been registered!", e)
      dispatch(fetchEnd())
      if (setError) {
        setError(e?.response?.data?.message)
      }
    }
  }
