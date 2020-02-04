import { handleActions } from "redux-actions";
import { combineReducers } from "redux";
import {
  addToDraft,
  addToActive,
  removeFromActive,
  countMarkedItems,
  toggleMarker,
  removeFromDraft,
  editDraftCard
} from "./actions";

const draftCards = handleActions(
  {
    [addToDraft]: (_state, action) => [..._state, action.payload],
    [removeFromDraft]: (_state, action) => {
      const newState = [..._state];
      newState.splice(action.payload, 1);
      return newState;
    },
    [editDraftCard]: (_state, action) => {
      _state[action.payload.id].text = action.payload.text;
      return _state;
    }
  },
  []
);

const activeCards = handleActions(
  {
    [addToActive]: (_state, action) => [..._state, action.payload],
    [removeFromActive]: (_state, action) => {
      const newState = [..._state];
      newState.splice(action.payload, 1);
      return newState;
    },
    [toggleMarker]: (_state, action) => {
      _state[action.payload].marked = !_state[action.payload].marked;
      return _state;
    }
  },
  []
);

const markedItems = handleActions(
  {
    [countMarkedItems]: (_state, action) => action.payload
  },
  0
);

export default combineReducers({ draftCards, activeCards, markedItems });

export const getDraftCards = state => state.app.draftCards;
export const getActiveCards = state => state.app.activeCards;
export const getMarkedItems = state => state.app.markedItems;
