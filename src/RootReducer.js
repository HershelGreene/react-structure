import { combineReducers } from "redux";

// reducers
import AuthReducer from "Modules/Auth/Redux/Reducer";

const RootReducer = combineReducers({
  auth: AuthReducer,
});

export default RootReducer;
