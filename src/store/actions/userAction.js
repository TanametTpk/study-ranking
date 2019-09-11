import { GET_USER , REGISTER } from './types'

export const userRegister = (name) => async dispatch => {

    //do something
    dispatch({
        type: REGISTER,
        payload: {_id: "userid" , name: "name"}
    })

    return new Promise((resolve, reject) => {
        let wait = setTimeout(() => {
          resolve('Promise A win!');
        }, 1000)
      })

}

export const getUser = (_id) => async dispatch => {

    //do something
    dispatch({
        type: GET_USER,
    })

    return null

}