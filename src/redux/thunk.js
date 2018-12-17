import { getFormEdit, getFormView } from "./selectors";
import {
  editFormSuccess,
  EditFormPending,
  setNewEditableForm
} from "./actions/formActions";

export function setupForm() {
  return function _resetForm(dispatch, getState) {
    const form = getFormView(getState());
    dispatch(setNewEditableForm(form));
  };
}

export function saveForm() {
  return function _saveForm(dispatch, getState) {
    dispatch(editFormPending());
    const form = getFormEdit(getState());
    dispatch(editFormSuccess(form));
  };
}
