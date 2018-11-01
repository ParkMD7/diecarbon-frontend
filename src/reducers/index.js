// dependencies
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

// user files
import currentUser from './currentUserReducer';
import goalsReducer from './goalsReducer';

const rootReducer = combineReducers({
  currentUser: currentUser,
  goals: goalsReducer
});

export default rootReducer;
