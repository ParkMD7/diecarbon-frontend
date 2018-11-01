const LOGIN_OR_SIGN_UP = 'LOGIN_OR_SIGN_UP'
const SIGNOUT = 'SIGNOUT'


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
