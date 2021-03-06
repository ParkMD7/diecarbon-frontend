// user files
import { SET_CURRENT_USER, AUTHENTICATING_USER, AUTHENTICATED_USER, FAILED_LOGIN, SIGNOUT, SEND_EMAIL, COMMIT_TO_GOAL, UNCOMMIT_FROM_GOAL  } from '../constants';

const defaultState = {
  user: null,
  loggedIn: false,
  authenticatingUser: false,
  failedLogin: false,
  error: null,
  userCommittedGoals: []
}

const userReducer = (state=defaultState, action) => {
  switch (action.type) {

    case SET_CURRENT_USER:
      return { ...state, user: action.payload, loggedIn: true, authenticatingUser: false, userCommittedGoals: action.payload.goals }

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

    case COMMIT_TO_GOAL:
      return { ...state, userCommittedGoals: [...state.userCommittedGoals, action.goal] }

    case UNCOMMIT_FROM_GOAL:
      const updatedUserCommittedGoals = state.userCommittedGoals.filter(goal => goal !== action.goal)
      debugger
      return { ...state, userCommittedGoals: [...updatedUserCommittedGoals] }

    case SEND_EMAIL:
      return action.payload.data

    default:
      return state
  }
}

export default userReducer
