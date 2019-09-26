import { createStore, compose } from "redux";

import reducer from "./redux/reducers/movies";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers());

export default store;
