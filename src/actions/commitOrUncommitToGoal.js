// dependencies
import axios from "axios"; // handles network requests & redux-promise on Index.js handles async nature of request
// user files
import { COMMIT_TO_GOAL, ROOT_URL } from '../constants';


export const commitToGoal = (userID) => {
  // debugger
  const request = axios.post(`${ROOT_URL}/goals/${id}`, {
    users: userID
  })
  // .then(function (response) {
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // })

  return {
    type: FETCH_GOAL,
    payload: request // redux-promise middleware will auto resolve this promise whenever it sees this action
  };
}
