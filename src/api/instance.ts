import axios, { AxiosRequestConfig } from 'axios'
import { Platform } from 'react-native'
import DeviceInfo from 'react-native-device-info'
import * as RNLocalize from 'react-native-localize'
import R from 'res'
import { store } from 'state'
// import { isWrongToken } from 'state/user/actions'

const apiClient = axios.create({
  baseURL: R.consts.API_BASE_URL,
  headers: {
    'X-Hardware-Id': DeviceInfo.getUniqueId(),
    'X-Platform': Platform.OS,
    'X-App-Version': DeviceInfo.getVersion(),
    'X-Language': RNLocalize.getLocales()[0].languageCode,
  },
})

apiClient.interceptors.request.use((req: AxiosRequestConfig) => {
  const token = store.getState().user?.user?.accessToken?.token

  if (req.headers === undefined) {
    req.headers = {}
  }

  if (token) {
    req.headers.authorization = `Bearer ${token}`
  }
  return req
})

// apiClient.interceptors.response.use(
//   response => response,
//   error => {
//     if (error.response.status === 401) {
//       store.dispatch(isWrongToken())
//     }
//     throw error
//   },
// )

export default apiClient
