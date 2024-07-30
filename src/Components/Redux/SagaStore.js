import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducers from './Reducers/rootReducers';
import rootSaga from './ReduxSaga/rootSaga';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create the Redux store with the saga middleware
const store = createStore(
    rootReducers,
    applyMiddleware(sagaMiddleware)
);

// Run the root saga
sagaMiddleware.run(rootSaga);

export default store;