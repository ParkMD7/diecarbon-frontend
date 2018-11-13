// dependencies
import axios from "axios";

// user files
import { FETCH_USER_GOALS, ROOT_URL } from '../constants';


export const fetchUserGoals = (userID) => {
  const request = axios.get(`${ROOT_URL}/users/${userID}`)
  debugger

  return {
    type: FETCH_USER_GOALS,
    payload: request
  }
};
