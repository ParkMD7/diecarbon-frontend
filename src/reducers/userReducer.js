// user files
import { SET_CURRENT_USER, AUTHENTICATING_USER, AUTHENTICATED_USER, FAILED_LOGIN, SIGNOUT, FETCH_USER_GOALS, SEND_EMAIL  } from '../constants';

const defaultState = {
  user: null,
  loggedIn: false,
  authenticatingUser: false,
  failedLogin: false,
  error: null,
  fetchedUserGoals: []
}

const userReducer = (state=defaultState, action) => {
  switch (action.type) {

    case SET_CURRENT_USER:
      return { ...state, user: action.payload, loggedIn: true, authenticatingUser: false }

    case AUTHENTICATING_USER: //tells the app we're fetching
      return { ...state, authenticatingUser: true }

    case AUTHENTICATED_USER:
      return { ...state, authenticatingUser: false }

    case FAILED_LOGIN: //for error handling
      return {
        ...state,
        failedLogin: true,
        error: action.payload,
        authenticatingUser: false
      }

    case SIGNOUT:
      return defaultState

    // case FETCH_USER_GOALS:
    // debugger
    //   console.log('%c GoalReducer Action : ', 'color: orange', action.payload.data)
    //   // debugger
    //   return { ...state, fetchedUserGoals: action.payload.data.goals }

    case SEND_EMAIL:
      debugger
      return action.payload.data

    default:
      return state
  }
}

export default userReducer
