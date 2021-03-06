// action types

export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const EDIT_ITEM = "EDIT_ITEM";

//action creators

export function addItem(content,id) {
  return {
    type: ADD_ITEM,
    content: content
  };
}

export function removeItem(id) {
  return {
    type: REMOVE_ITEM,
    id: id
  };
}

export function editItem(id, text) {
  return {
    type: EDIT_ITEM,
    id: id,
    text: text
  };
}
