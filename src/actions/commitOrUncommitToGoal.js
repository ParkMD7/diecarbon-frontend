// dependencies
import axios from "axios"; // handles network requests & redux-promise on Index.js handles async nature of request
// user files
import { ROOT_URL, COMMIT_TO_GOAL, UNCOMMIT_FROM_GOAL } from '../constants';


export const commitToGoal = (userID, goal) => {

  const request = axios.patch(`${ROOT_URL}/goals/${goal.id}`, {
      user: userID
  })

  return {
    type: COMMIT_TO_GOAL,
    payload: request,
    goal: goal
  };
}

export const unCommitFromGoal = (userID, goal) => {

  const request = axios.delete(`${ROOT_URL}/goals/${goal.id}`, {
      user: userID
  })
  debugger
  return {
    type: UNCOMMIT_FROM_GOAL,
    payload: request,
    userID: userID,
    goal: goal
  };
}
