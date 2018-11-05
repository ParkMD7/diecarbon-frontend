// dependencies
import axios from "axios"; // handles network requests & redux-promise on Index.js handles async nature of request
// user files
import { FETCH_GOAL, ROOT_URL } from '../constants';


export const fetchGoal = (goalID) => {
  const request = axios.get(`${ROOT_URL}/goals/${goalID}`)

  return {
    type: FETCH_GOAL,
    payload: request // redux-promise middleware will auto resolve this promise whenever it sees this action
  }
};
