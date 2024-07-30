import { all, fork } from "redux-saga/effects";
import watchCounter from "./saga/CounterWatchSaga";
import watchFetchDataSaga from "./saga/FetchDataSaga";

function* rootSaga() {
  yield all([fork(watchCounter), fork(watchFetchDataSaga)]);
}

export default rootSaga;
