import { combineReducers } from 'redux'
import alertReducer from './reducer/alerReducer';
import authReducer from './reducer/authReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    alert: alertReducer
})

export default rootReducer;