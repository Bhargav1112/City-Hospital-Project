import * as Types from '../action/actionType'

const initialState = {
    text: '',
    color: ''
}

const alertReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.SET_ALERT:
            return {
                ...state,
                text: action.payload.text,
                color: action.payload.color
            }
        case Types.RESET_ALERT:
            return {
                ...state,
                text: '',
                color: ''
            }
        default:
            return state
    }
}

export default alertReducer;