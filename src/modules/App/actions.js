import { createAction } from "redux-actions";

export const addToDraft = createAction("ADDTODRAFT");
export const addToActive = createAction("ADDTOACTIVE");
export const removeFromActive = createAction("REMOVEFROMACTIVE");
export const removeFromDraft = createAction("REMOVEFROMDRAFT");
export const countMarkedItems = createAction("COUNTMARKEDITEMS");
export const toggleMarker = createAction("TOGGLEMARKER");
export const editDraftCard = createAction("EDITDRAFTCARD");
