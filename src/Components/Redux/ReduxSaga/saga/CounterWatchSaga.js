import { takeLatest, put } from 'redux-saga/effects';
import { decrement, increment } from '../Action/CounterAction';

// Worker saga
function* incrementCounter() {
    // Your logic for incrementing the counter goes here
    yield put(increment());
}

// Worker saga
function* decrementCounter() {
    // Your logic for decrementing the counter goes here
    yield put(decrement());
}

// Watcher saga
function* watchCounter() {
    yield takeLatest('INCREMENT_COUNTER', incrementCounter);
    yield takeLatest('DECREMENT_COUNTER', decrementCounter);
}

export default watchCounter;