import * as Types from '../action/actionType'
import { call, put, all, takeEvery } from 'redux-saga/effects'
import { signinApi, signupApi } from '../../common/api/authAPI'

function* Signup(action) {
	try {
		const res = yield call(signupApi, action.payload)
		yield put({ type: Types.SIGN_UP, payload: res })
		console.log(res)
	} catch (error) {
		// yield put({ type: Types.ERROR_SIGN_UP, payload: error.message })
		console.log(error)
	}
}
function* Signin(action) {
	try {
		const res = yield call(signinApi, action.payload)
		console.log(res)
	} catch (error) {
		console.log(error)
	}
}

function* SignupWatcher() {
	yield takeEvery(Types.SIGN_UP, Signup)
}
function* SigninWatcher() {
	yield takeEvery(Types.SIGN_IN, Signin)
}


export default function* AuthRootWatcher() {
	yield all([SignupWatcher(), SigninWatcher()])
}