// dependencies
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

// user files
import userReducer from './userReducer';
import goalsReducer from './goalsReducer';
import youtubeVideoReducer from './youtubeVideoReducer';

const rootReducer = combineReducers({
  user: userReducer,
  form: formReducer,
  goals: goalsReducer,
  video: youtubeVideoReducer
});

export default rootReducer;
