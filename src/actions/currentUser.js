// user files
import { LOGIN_OR_SIGN_UP } from '../constants';
import { SIGNOUT } from '../constants';
import { EDIT_USER } from '../constants';


// export const loginOrSignup = (user) => {
//   return {
//     type: LOGIN_OR_SIGN_UP,
//     payload: user
//   }
// };

export const signout = () => {
  // debugger
  localStorage.removeItem('jwt')
  return {
    type: SIGNOUT
  }
};

export const editUser = (user) => {
  return {
    type: EDIT_USER,
    payload: user
  }
};
