import { createStore, applyMiddleware } from 'redux'
import rootReducer from './index';
import createSagaMiddleware from 'redux-saga'
import rootSagaWatcher from './saga/rootSaga';
import thunk from 'redux-thunk'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware, thunk]

const store = createStore(rootReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(rootSagaWatcher)

export default store;