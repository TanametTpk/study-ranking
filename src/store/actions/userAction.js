import {  REGISTER , GET_RANK , UPDATE_RANK } from './types'
import axios from 'axios'
import { HOST } from '../../configs/api'

export const userRegister = (name) => async dispatch => {

    let res = axios.post(`${HOST}/users` , {name})

    //do something
    dispatch({
        type: REGISTER,
        payload: res.data
    })

    return res.data

}

export const getUser = (_id) => async dispatch => {

    let res = axios.get(`${HOST}/users/${_id}`)

    //do something
    dispatch({
        type: REGISTER,
        payload: res.data
    })

    return res.data

}

export const getRanking = (_id) => async dispatch => {

    let res = axios.get(`${HOST}/users/rank`)

    //do something
    dispatch({
        type: GET_RANK,
        payload: res.data
    })

    return res.data

}

export const updateRanking = (_id , time) => async dispatch => {

    //do something
    dispatch({
        type: UPDATE_RANK,
        payload: {
            _id,
            time
        }
    })

    return {
        _id,
        time
    }

}

// [
//     {
//         user:{
//             _id: '1',
//             name: 'John Brown',
//         },
//         time:32
//     },
//     {
//         user:{
//                 _id: '2',
//                 name: 'Jim Green',
//         },
//         time: 42,
//     },
//     {
//         user:{
//                 _id: '3',
//                 name: 'Joe Black',
//         },
//         time: 15,
//     },
//     {
//         user:{
//                 _id: '4',
//                 name: 'Jim Red',
//         },
//         time: 32,
//     }
// ]