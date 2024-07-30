import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
} from "../Action/ActionTypes";
import {
  fetchDataFailure,
  fetchDataRequest,
  fetchDataSuccess,
} from "../Action/CounterAction";

function* fetchDataSaga() {
  console.log("fetchDataSaga");
  try {
    const response = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/posts"
    );
    yield put(fetchDataSuccess(response.data));

    console.log(response.data);
  } catch (error) {
    yield put(fetchDataFailure(error));
  }
}

export default function* watchFetchDataSaga() {
  yield takeEvery(FETCH_DATA_REQUEST, fetchDataSaga);
}
