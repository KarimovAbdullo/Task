import { IUser } from 'types/data'

export type UserState = {
  user: IUser
  loading: boolean
  wrongToken: boolean
}
