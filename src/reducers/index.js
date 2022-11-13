import { combineReducers } from "redux";
import userReducer from "./userReducer";
import aricleReducer from "./articleReducer";
const rootReducer = combineReducers({
  userState: userReducer,
  articleState: aricleReducer,
});

export default rootReducer;
