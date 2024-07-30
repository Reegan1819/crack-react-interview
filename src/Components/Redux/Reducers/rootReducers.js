import { combineReducers } from "redux";
import counterReducer from "./CounterReducer";
import dataReducer from "../ReduxSaga/Reducers/dataReducer";

const rootReducers = combineReducers({
  Counter: counterReducer,
  data: dataReducer,
});

export default rootReducers;
