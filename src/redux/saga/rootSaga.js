import AuthRootWatcher from "./authSaga";
import {all} from 'redux-saga/effects'

export default function* rootSagaWatcher () {
    yield all([AuthRootWatcher()])
}