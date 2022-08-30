import * as Types from './actionType'

export const signupAction = (data) => {
    return dispatch => {
        dispatch({ type: Types.SIGN_UP, payload: data })
    }
}
export const signinAction = (data) => {
    return dispatch => {
        dispatch({ type: Types.SIGN_IN, payload: data })
    }
}

export const signedinAction = (data) => {
    return dispatch => {
        dispatch({ type: Types.SIGNED_IN, payload: data })
    }
}

export const signoutAction = () => {
    return dispatch => {
        dispatch({ type: Types.SIGN_OUT })
    }
}

export const signedoutAction = () => {
    return dispatch => {
        dispatch({ type: Types.SIGNED_OUT })
    }
}