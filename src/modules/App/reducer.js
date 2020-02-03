import { handleActions } from "redux-actions";
import { combineReducers } from "redux";
import { setCount, setIsLoading, removeIsLoading } from "./actions";

const test = handleActions({}, true);

export default combineReducers({ test });

export const getIsAuthorized = state => state.app.test;
