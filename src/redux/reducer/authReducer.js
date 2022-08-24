import * as Types from '../action/actionType'

const initialState = {
    isLoading: false,
    user: null,
    error: ''
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.SIGN_UP:
            return {
                ...state,
                isLoading: false,
                user: action.payload,
                error: ''
            }
        default:
            return state;
    }
}

export default authReducer;