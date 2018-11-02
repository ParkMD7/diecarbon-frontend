import { FETCH_VIDEO } from "../constants";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_VIDEO:
      return [action.payload.data, ...state];
  }
  return state;
}
