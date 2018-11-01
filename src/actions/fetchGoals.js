// dependencies
import axios from "axios"; // handles network requests & redux-promise on Index.js handles async nature of request

// user files
import { FETCH_GOALS, ROOT_URL } from '../constants'


export const fetchGoals = () => {
  const request = axios.get(`${ROOT_URL}/goals`)

  return {
    type: FETCH_GOALS,
    payload: request // redux-promise middleware will auto resolve this promise whenever it sees this action
  }
}
