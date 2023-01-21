import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import thunk from "redux-thunk";
import { reducer as Appreducer } from "./AppReducer/reducer";
import { reducer as Authreducer } from "./AuthReducer/reducer";

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootstore = combineReducers({ Appreducer, Authreducer });

const store = legacy_createStore(
  rootstore,
  composeEnhancers(applyMiddleware(thunk))
);

export { store };
