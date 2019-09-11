import { GET_USER , REGISTER } from './types'

export const register = (name) => async dispatch => {

    //do something
    dispatch({
        type: REGISTER,
        payload: {_id: "userid" , name: "name"}
    })

    return null

}

export const getUser = (_id) => async dispatch => {

    //do something
    dispatch({
        type: GET_USER,
    })

    return null

}