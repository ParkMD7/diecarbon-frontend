// dependencies
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

// user files
// import currentUser from './currentUserReducer';
import userReducer from './userReducer';
import goalsReducer from './goalsReducer';
import committedGoalsReducer from './committedGoalsReducer';
import youtubeVideoReducer from './youtubeVideoReducer';

const rootReducer = combineReducers({
  // currentUser: currentUser,
  user: userReducer,
  committedGoals: committedGoalsReducer,
  form: formReducer,
  goals: goalsReducer,
  video: youtubeVideoReducer
});

export default rootReducer;
