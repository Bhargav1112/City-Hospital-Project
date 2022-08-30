import { createStore, applyMiddleware } from 'redux'
import rootReducer from './index';
import createSagaMiddleware from 'redux-saga'
import rootSagaWatcher from './saga/rootSaga';
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware, thunk]

const store = createStore(persistedReducer, applyMiddleware(...middlewares))

export const persistor = persistStore(store)

sagaMiddleware.run(rootSagaWatcher)

export default store;