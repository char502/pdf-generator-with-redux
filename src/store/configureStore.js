import { applyMiddleware, createStore, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import pdfGenReducer from "../redux/reducers/pdfGenReducer";
import simpleTestReducer from "../redux/reducers/simpleTestReducer";
import formReducer from "../redux/reducers/formReducer";
// import thunk from "redux-thunk";

function configureStore(initialState) {
  const reducers = combineReducers({
    form: formReducer,
    pdfGen: pdfGenReducer,
    testReducer: simpleTestReducer
  });

  return createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...[thunkMiddleware]))
  );
}

export default configureStore;

// export default () => {
//   const store = createStore(
//     combineReducers({
//       pdfGen: pdfGenReducer,
//       testReducer: simpleTestReducer,
//       form: formReducer
//     }),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   );
//   return store;
// };
