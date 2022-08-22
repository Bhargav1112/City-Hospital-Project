import * as Types from '../action/actionType'
import {call, put, all, takeEvery} from 'redux-saga/effects'
import { signupApi } from '../../common/api/authAPI'

function* Signup (action) {
	try{
		const res = yield call(signupApi, action.payload)
		// yield put({type: Types.SIGN_UP, payload: action.payload})
	}catch(error){
		yield put({type: Types.ERROR_SIGN_UP, payload: error.message})
	}
}

function* SignupWatcher() {
	yield takeEvery(Types.SIGN_UP, Signup) 
}

export default function* AuthRootWatcher () {
	yield all([SignupWatcher()])
}