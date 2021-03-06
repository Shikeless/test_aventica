import { createStore } from "redux";
import rootReducer from "./modules";

const createAppStore = () => {
  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  );
  return store;
};

export default createAppStore;
