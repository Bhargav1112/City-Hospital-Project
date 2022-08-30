import * as Types from '../action/actionType'
import { call, put, all, takeEvery } from 'redux-saga/effects'
import { signinApi, signOutApi, signupApi } from '../../common/api/authAPI'
import { setAlert } from '../action/alertActions'
import { signedinAction, signedoutAction } from '../action/authAction'

async function* Signup(action) {
	try {
		const res = yield call(signupApi, action.payload)
		yield put(setAlert({ text: res.payload, color: 'success' }))
		console.log(res);
	} catch (error) {
		yield put(setAlert({ text: error.payload, color: 'error' }))
	}
}
function* Signin(action) {
	try {
		const res = yield call(signinApi, action.payload)
		yield put(signedinAction(res))
		yield put(setAlert({ text: 'Successfully loggedin.', color: 'success' }))
	} catch (error) {
		yield put(setAlert({ text: error.payload, color: 'error' }))
	}
}

function* signout(action) {
	try {
		const res = yield call(signOutApi)
		yield put(signedoutAction())
		yield put(setAlert({ text: res.payload, color: 'success' }))
	} catch (error) {
		yield put(setAlert({ text: error.payload, color: 'error' }))
	}
}

function* SignupWatcher() {
	yield takeEvery(Types.SIGN_UP, Signup)
}
function* SigninWatcher() {
	yield takeEvery(Types.SIGN_IN, Signin)
}
function* SignoutWatcher() {
	yield takeEvery(Types.SIGN_OUT, signout)
}

export default function* AuthRootWatcher() {
	yield all([SignupWatcher(), SigninWatcher(), SignoutWatcher()])
}