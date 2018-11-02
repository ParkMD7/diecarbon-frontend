import { FETCH_VIDEO } from "../constants";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_VIDEO:
      console.log(action.payload.data);
      return [action.payload.data];

    default:
      return state
    }
  }
