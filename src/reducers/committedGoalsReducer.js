// // dependencies
// import _ from 'lodash'
//
// // user files
// import { COMMIT_TO_GOAL, UNCOMMIT_FROM_GOAL, FETCH_USER_GOALS } from '../constants';
//
//
//
// const defaultState = {
//   committedGoals: []
// }
//
//
// export default function(state=defaultState, action){
//   switch(action.type){
//
//     case FETCH_USER_GOALS:
//       // console.log('%c GoalReducer Action : ', 'color: orange', action.payload.data)
//       return { ...state, committedGoals: action.payload.data.goals }
//
//     case COMMIT_TO_GOAL:
//       // console.log('%c GoalReducer Action : ', 'color: orange', action.goal)
//       return { ...state, committedGoals: [...state.committedGoals, action.goal] }
//
//     case UNCOMMIT_FROM_GOAL:
//       console.log('%c GoalReducer Action : ', 'color: orange', action.goal)
//
//       // const usersToKeep = _.remove(action.goal.users, user => {
//       //   debugger
//       //   return user.id.toString() !== action.userID
//       // })
//
//       debugger
//       return { ...state, committedGoals: state.committedGoals.filter(goal => goal !== action.goal) }
//
//     default:
//       return state
//   }
// }
