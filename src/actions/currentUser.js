import { LOGIN_OR_SIGN_UP } from '../constants'
import { SIGNOUT } from '../constants'


export const loginOrSignup = (user) => {
  return {
    type: LOGIN_OR_SIGN_UP,
    user
  }
}

export const signout = (user) => {
  return {
    type: SIGNOUT,
    user
  }
}
