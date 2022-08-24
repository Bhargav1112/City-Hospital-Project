import * as Types from './actionType'

export const signupAction = (data) => {
    console.log(data);
    return dispatch => {
        dispatch({ type: Types.SIGN_UP, payload: data })
    }
}
export const signinAction = (data) => {
    console.log(data);
    return dispatch => {
        dispatch({ type: Types.SIGN_IN, payload: data })
    }
}