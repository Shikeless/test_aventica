import { handleActions } from "redux-actions";
import { combineReducers } from "redux";
import { addToDraft, addToActive } from "./actions";

const draftCards = handleActions(
  { [addToDraft]: (_state, action) => [..._state, action.payload] },
  []
);

const activeCards = handleActions(
  { [addToActive]: (_state, action) => [..._state, action.payload] },
  []
);

export default combineReducers({ draftCards, activeCards });

export const getDraftCards = state => state.app.draftCards;
export const getActiveCards = state => state.app.activeCards;
