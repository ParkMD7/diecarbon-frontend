// dependencies
import axios from "axios"; // handles network requests & redux-promise on Index.js handles async nature of request
// user files
import { COMMIT_TO_GOAL, ROOT_URL } from '../constants';


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
