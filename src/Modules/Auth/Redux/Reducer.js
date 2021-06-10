import { LOGIN } from "./ActionTypes";

const initialState = {
  token: "",
  refresh_token: "",
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, token: action.payload };
    default:
      return state;
  }
};

export default AuthReducer;
