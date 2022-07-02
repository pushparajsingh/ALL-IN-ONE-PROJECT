import { legacy_createStore, applyMiddleware,compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga/rootsaga";
import rootReducer from "../reducer/index";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
export default store;