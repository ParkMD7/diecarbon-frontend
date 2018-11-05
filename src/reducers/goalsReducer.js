// dependencies
import _ from 'lodash' // allows me to change data type of fetched goals from an array to an object w/ key of ID

// user files
import { FETCH_GOALS, FETCH_GOAL } from '../constants';


export default function(state={}, action){
  switch(action.type){

    case FETCH_GOALS:
      // console.log('this is the action', action.payload.data);
      // using lodash to turn an array of fetched goals into an object with a key/value pair of goal ID & goal object
      return _.mapKeys(action.payload.data, 'id')

    case FETCH_GOAL:
      // include all goals we've fetched above & put them into this new object
      // add the newly fetched goal that a user has clicked on as a new key:value pair
      // debugger
      console.log('%c GoalReducer Action : ', 'color: orange', action.payload.data.id, action.payload.data)
      return { ...state, [action.payload.data.id]: action.payload.data }

    default:
      return state
  }
}
