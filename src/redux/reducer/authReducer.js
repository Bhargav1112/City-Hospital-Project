import * as Types from '../action/actionType'

const initialState = {
    isLoading: false,
    user: null,
    error: ''
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.SIGNED_IN:
            return {
                ...state,
                isLoading: false,
                user: action.payload,
                error: ''
            }
        case Types.SIGNED_OUT:
            return {
                ...state,
                isLoading: false,
                user: null,
                error: ''
            }
        default:
            return state;
    }
}

export default authReducer;