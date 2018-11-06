// user files
import { LOGIN_USER, ROOT_URL } from '../constants';

export const loginUser = (username, password) => {
  return (dispatch) => {
    // dispatch({ type: 'AUTHENTICATING_USER' })
    dispatch(authenticatingUser())
    // fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/login`)
    fetch(`${ROOT_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password
        }
      })
    })
      .then(response => {
        if (response.ok) { //was the HTTP status code < 400
          return response.json()
        } else {
          throw response
        }
      })
      .then(JSONResponse => {
        // debugger
        console.log('%c INSIDE YE OLDE .THEN', 'color: navy')
        localStorage.setItem('jwt', JSONResponse.jwt)
        // dispatch({ type: 'SET_CURRENT_USER', payload: JSONResponse.user })
        dispatch(setCurrentUser(JSONResponse.user))
      })
      .catch(r => r.json().then(e => dispatch({ type: 'FAILED_LOGIN', payload: e.message })))
  }
}

export const fetchCurrentUser = () => {
  // takes the token in localStorage and finds out who it belongs to
  return (dispatch) => {
    dispatch(authenticatingUser()) //tells the app we are fetching
    fetch(`${ROOT_URL}/profile`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      }
    })
      .then(response => response.json())
      .then((JSONResponse) => dispatch(setCurrentUser(JSONResponse.user)))
  }
}

export const setCurrentUser = (userData) => ({
  type: 'SET_CURRENT_USER',
  payload: userData
})

export const failedLogin = (errorMsg) => ({
  type: 'FAILED_LOGIN',
  payload: errorMsg
})

// tell our app we're currently fetching
export const authenticatingUser = () => ({ type: 'AUTHENTICATING_USER' })
