import { createStore, combineReducers } from "redux";
import pdfGenReducer from "../redux/reducers/pdfGenReducer";
import simpleTestReducer from "../redux/reducers/simpleTestReducer";

export default () => {
  const store = createStore(
    combineReducers({
      pdfGen: pdfGenReducer,
      testReducer: simpleTestReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
