import React from "react";
import ReactDOM from "react-dom";
import IndexRouter from "./routers/IndexRouter";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./store/configureStore";
import "./css/index.css";
import { addForm } from "./redux/actions/pdfGenActions";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

const store = configureStore();

store.dispatch(addForm({ id: 67 }));

const routerAndStore = (
  <Provider store={store}>
    <IndexRouter />
  </Provider>
);

console.log(store.getState());
// ReactDOM.render(<Routes />, document.getElementById("root"));

ReactDOM.render(routerAndStore, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
