import { FETCH_POST , ADD_POST , UPDATE_POST , DELETE_POST } from './types'

export const fetchPosts = () => async dispatch => {

    //do something
    dispatch({
        type: FETCH_POST,
        payload: ["1" , "2" , "3"]
    })

    return null

}

export const createPost = (description , time , user) => async dispatch => {

    //do something
    dispatch({
        type: ADD_POST,
        payload: ["1" , "2" , "3"]
    })

    return null

}

export const updatePost = (_id , description , time) => async dispatch => {

    //do something
    dispatch({
        type: UPDATE_POST,
        payload: ["1" , "2" , "3"]
    })

    return null

}

export const deletePost = (_id) => async dispatch => {

    //do something
    dispatch({
        type: DELETE_POST,
        payload: ["1" , "2" , "3"]
    })

    return null

}