import * as Types from './actionType'

export const setAlert = (data) => {
    return dispatch => {
        dispatch({ type: Types.SET_ALERT, payload: data })
    }
}

export const resetAlert = () => {
    return dispatch => {
        dispatch({ type: Types.RESET_ALERT })
    }
}