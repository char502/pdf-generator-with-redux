import { applyMiddleware, createStore, compose } from "redux";
import createReducer from "../redux/reducers/createReducer";
// import pdfGenReducer from "../components/old/_pdfGenReducer";
// import simpleTestReducer from "../components/old/simpleTestReducer";
// import thunkMiddleware from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";

// import formReducer from "../redux/reducers/_formReducer";
// import thunk from "redux-thunk";

const composeEnhancers =
  typeof window === "object" &&
  (window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose);

export function configureStore() {
  const middlewares = [];
  const store = createStore(
    createReducer(),
    {},
    composeEnhancers(applyMiddleware(...middlewares))
  );
  return store;
}

export default configureStore;

// function configureStore(initialState) {
//   const reducers = combineReducers({
//     form: formReducer,
//     pdfGen: pdfGenReducer,
//     testReducer: simpleTestReducer
//   });

//   return createStore(
//     reducers,
//     initialState,
//     composeWithDevTools(applyMiddleware(...[thunkMiddleware]))
//   );
// }
