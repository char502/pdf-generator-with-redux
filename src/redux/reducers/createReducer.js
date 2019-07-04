import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
// import { serverCommsReducer } from './serverCommsReducer'

export default function createReducer(extraReducerObjects = {}) {
  return combineReducers({
    form: formReducer,
    ...extraReducerObjects
  });
}
