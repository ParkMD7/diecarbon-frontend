// user files
import { COMMIT_TO_GOAL } from '../constants';


export default function(state={}, action){
  switch(action.type){

    case COMMIT_TO_GOAL:
      console.log('%c GoalReducer Action : ', 'color: orange', action.goal)
      debugger
      return { ...state, [action.goal.id]:action.goal }

    default:
      return state
  }
}
