// user files
import { SET_CURRENT_USER, AUTHENTICATING_USER, AUTHENTICATED_USER, FAILED_LOGIN, SIGNOUT, COMMIT_TO_GOAL  } from '../constants';

const defaultState = {
  user: null,
  loggedIn: false,
  authenticatingUser: false,
  failedLogin: false,
  error: null,
  goals: []
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

    case COMMIT_TO_GOAL:
    console.log('%c GoalReducer Action : ', 'color: orange', action.payload.data.id, action.payload.data)
    return { ...state,  goals: [ ...state.goals, action.user ] }

    case SIGNOUT:
      // browserHistory.push('/')
      return defaultState

    default:
      return state
  }
}

export default userReducer
