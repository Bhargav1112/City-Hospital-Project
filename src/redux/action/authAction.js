import * as Types from './actionType'

export const signupAction = (data) => {
    console.log(data);
    return dispatch => {
        dispatch({type: Types.SIGN_UP, payload: data})
    }
}