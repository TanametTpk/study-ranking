import { combineReducers } from 'redux'
import postReducer from './postReducer'
import userReducer from './userReducer'
// import reducer

export default combineReducers({
    // object reducer
    user:userReducer,
    posts:postReducer
})