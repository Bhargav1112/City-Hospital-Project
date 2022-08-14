import { createContext, useReducer } from "react";
import themeReducer from "./reducer/themeReducer";
import * as ActionType from "./actionType";

export const ThemeContext = createContext({
    theme: "",
    toggleTheme: (val) => {},
});

const initialState = {
    theme: "light",
};

const ThemeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(themeReducer, initialState);

    const toggleTheme = (val) => {
        const themeVal = val === "light" ? "dark" : "light";
        dispatch({ type: ActionType.TOGGLE_THEME, payload: themeVal });
    };

    const ctxValue = {
        ...state,
        toggleTheme,
    };
    return (
        <ThemeContext.Provider value={ctxValue}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
