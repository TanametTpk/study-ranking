import { FETCH_POST , ADD_POST , UPDATE_POST , DELETE_POST } from './types'
import axios from 'axios'
import HOST from '../../configs/api'

export const fetchPosts = () => async dispatch => {

    let res = axios.get(`${HOST}/tasks`)
    
    //do something
    dispatch({
        type: FETCH_POST,
        payload: res.data
    })

    return res.data

}

export const createPost = (description , time , user) => async dispatch => {

    let res = axios.post(`${HOST}/tasks` , { description , time , user })

    //do something
    dispatch({
        type: ADD_POST,
        payload: res.data
    })

    return res.data

}

export const updatePost = (_id , description , time) => async dispatch => {

    let res = axios.put(`${HOST}/tasks/${_id}` , { time })

    //do something
    dispatch({
        type: UPDATE_POST,
        payload: res.data
    })

    return res.data

}

export const deletePost = (_id) => async dispatch => {

    let res = axios.delete(`${HOST}/tasks/${_id}`)

    //do something
    dispatch({
        type: DELETE_POST,
        payload:res.data
    })

    return res.data

}