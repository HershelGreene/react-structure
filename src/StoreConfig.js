import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./RootReducer";

const StoreConfig = () => {
  const middlewares = applyMiddleware(ReduxThunk);
  const composedWithDevTools = composeWithDevTools(middlewares);
  const store = createStore(rootReducer, {}, composedWithDevTools);
  return store;
};

export default StoreConfig;
