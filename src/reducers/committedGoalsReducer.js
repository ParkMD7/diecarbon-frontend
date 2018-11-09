// dependencies
import _ from 'lodash'

// user files
import { COMMIT_TO_GOAL, UNCOMMIT_FROM_GOAL } from '../constants';


export default function(state={}, action){
  switch(action.type){

    case COMMIT_TO_GOAL:
      console.log('%c GoalReducer Action : ', 'color: orange', action.goal)
      // debugger
      return { ...state, [action.goal.id]:action.goal }

    case UNCOMMIT_FROM_GOAL:
      console.log('%c GoalReducer Action : ', 'color: orange', action.goal)
      // const newState = {...state}
      const usersToKeep = _.remove(action.goal.users, user => {
        debugger
        return user.id.toString() !== action.userID
      })

      // const usersToKeep = action.goal.users.filter( user => {
      //   debugger
      // 	return user.id.toString() !== action.userID
      // })
      debugger
      return { ...state, [action.goal.users]:usersToKeep }

    default:
      return state
  }
}
