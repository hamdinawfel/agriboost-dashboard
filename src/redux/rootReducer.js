import { combineReducers } from "redux";

import usersReducer from "../users/reducer";
import adminReducer from "../auth/reducer";
import candidatesReducer from "../candidates/reducer.js";
import targetReducer from "../target/reducer.js";

const rootReducer = combineReducers({
  admin: adminReducer,
  users: usersReducer,
  candidates: candidatesReducer,
  target: targetReducer,
});

export default rootReducer;
