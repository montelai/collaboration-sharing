import { createStore } from "redux";
import collaborationApp from "../reducers/reducer";

const store = createStore(collaborationApp);

import { ADD_ITEM, REMOVE_ITEM, EDIT_ITEM } from "../actions/actions";

// Log the initial state
console.log(store.getState());

// Dispatch some actions
store.dispatch(addItem("content"));
store.dispatch(addItem("content"));
store.dispatch(addItem("content"));
