// user files
import { LOGIN_OR_SIGN_UP } from '../constants';
import { SIGNOUT } from '../constants';
import { EDIT_USER } from '../constants';


export const loginOrSignup = (user) => {
  return {
    type: LOGIN_OR_SIGN_UP,
    payload: user
  }
};

export const signout = (user) => {
  return {
    type: SIGNOUT,
    payload: user
  }
};

export const editUser = (user) => {
  return {
    type: EDIT_USER,
    payload: user
  }
};

// // dependencies
// import axios from "axios"; // handles network requests & redux-promise on Index.js handles async nature of request
//
// // user files
// import { LOGIN_USER, ROOT_URL } from '../constants';
//
//
// export const loginUser = (username, password) => {
//   return (dispatch) => {
//     // dispatch({ type: 'AUTHENTICATING_USER' })
//     dispatch(authenticatingUser())
//     const request = axios.post(`${ROOT_URL}/login`, {
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       },
//       // body: JSON.stringify({
//       //   user: {
//       //     username: username,
//       //     password: password
//       //   }
//       // })
//       data: {
//         user: {
//           username: username,
//           password: password
//         }
//       },
//       auth: {
//         username: username,
//         password: password
//       },
//     })
//       .then(response => {
//         if (response.ok) {
//           return response.json()
//         } else {
//           throw response
//         }
//       })
//       /* { user:
//         { username: 'chandler bing', bio: '', avatar: '' },
//         jwt: 'aaaaaaaaaaaaaaa.bbbbbbbbbbbbbbbbbbbbb.ccccccccccccccccccc'
//       } */
//       .then(JSONResponse => {
//         console.log('%c INSIDE YE OLDE .THEN', 'color: navy')
//         localStorage.setItem('jwt', JSONResponse.jwt)
//         // dispatch({ type: 'SET_CURRENT_USER', payload: JSONResponse.user })
//         dispatch(setCurrentUser(JSONResponse.user))
//       })
//       .catch(r => r.json().then(e => dispatch({ type: 'FAILED_LOGIN', payload: e.message })))
//       // .then((jsonResponse) => {
//       //   localStorage.setItem('jwt', jsonResponse.jwt)
//       //   dispatch(setCurrentUser(jsonResponse.user))
//       // })
//   }
// }
//
// export const fetchCurrentUser = () => {
//   // takes the token in localStorage and finds out who it belongs to
//   return (dispatch) => {
//     dispatch(authenticatingUser()) //tells the app we are fetching
//     const request = axios.get(`${ROOT_URL}/profile`, {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem('jwt')}`
//       }
//     })
//       .then(response => response.json())
//       .then((JSONResponse) => dispatch(setCurrentUser(JSONResponse.user)))
//   }
// }
//
// export const setCurrentUser = (userData) => ({
//   type: 'SET_CURRENT_USER',
//   payload: userData
// })
//
// export const failedLogin = (errorMsg) => ({
//   type: 'FAILED_LOGIN',
//   payload: errorMsg
// })
//
// // tell our app we're currently fetching
// export const authenticatingUser = () => ({ type: 'AUTHENTICATING_USER' })
