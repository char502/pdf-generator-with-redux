import * as constants from "../constants";

export const addChange = (fieldName, fieldValue) => ({
  type: constants.ADD_CHANGE,
  fieldName,
  fieldValue
});

export const setNewEditableForm = (form) => ({
  type: constants.SET_UP_EDIT_FORM,
  form
});

export const editFormPEnding = () => ({
  type: constants.EDIT_FORM_PENDING
});

export const editFormSuccess = (form) => ({
  type: constants.EDIT_FORM_SUCCESS,
  form
});
