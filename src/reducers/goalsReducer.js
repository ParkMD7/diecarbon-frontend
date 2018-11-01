// dependencies
import _ from 'lodash' // allows me to change data type of fetched goals from an array to an object w/ key of ID

// user files
import { FETCH_GOALS } from '../constants';


export default function(state={}, action){
  switch(action.type){

    case FETCH_GOALS:
      // console.log('this is the action', action.payload.data);
      // using lodash to turn an array of fetched goals into an object with a key/value pair of goal ID & goal object
      return _.mapKeys(action.payload.data, 'id')

    default:
      return state
  }
}
