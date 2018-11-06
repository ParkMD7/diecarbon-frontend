// user files
import { LOGIN_OR_SIGN_UP, SIGNOUT } from '../constants';

const initialState = {
  id: 0,
  name: '',
  age: '',
  username: '',
  email: '',
  password: '',
  location: '',
  picture: '',
  footprint: 40000,
  goals: []
}


export default function(state={initialState}, action){
  switch(action.type){

      case LOGIN_OR_SIGN_UP:
        return Object.assign({}, action.user)

      case SIGNOUT:
        return Object.assign({}, action.user)

      default:
        return state
  }
}
