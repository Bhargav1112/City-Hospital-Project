import * as ActionType from "../actionType";

const themeReducer = (state, action) => {
    switch (action.type) {
        case ActionType.TOGGLE_THEME:
            return {
                theme: action.payload,
            };
        default:
            return state;
    }
};

export default themeReducer;
