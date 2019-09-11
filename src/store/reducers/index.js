import { combineReducers } from 'redux'
import postReducer from './postReducer'
// import reducer

export default combineReducers({
    // object reducer
    posts:postReducer
})