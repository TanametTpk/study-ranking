import { FETCH_POST , ADD_POST , UPDATE_POST , DELETE_POST } from './types'

export const fetchPosts = () => async dispatch => {

    //do something
    dispatch({
        type: FETCH_POST,
        payload: [
            {
                _id:"1",
                description:"leaning react",
                time:10,
            },
            {
                _id:"2",
                description:"leaning vue.js",
                time:5,
            }
        ]
    })

    return new Promise((resolve, reject) => {
        let wait = setTimeout(() => {
          resolve('Promise A win!');
        }, 1000)
      })

}

export const createPost = (description , time , user) => async dispatch => {

    //do something
    dispatch({
        type: ADD_POST,
        payload: {
            _id:"" + Date.now(),
            description,
            time,
            user
        },
    })

    return new Promise((resolve, reject) => {
        let wait = setTimeout(() => {
          resolve('Promise A win!');
        }, 1000)
      })

}

export const updatePost = (_id , description , time) => async dispatch => {

    //do something
    dispatch({
        type: UPDATE_POST,
        payload: {
            _id,
            description,
            time
        }
    })

    return new Promise((resolve, reject) => {
        let wait = setTimeout(() => {
          resolve('Promise A win!');
        }, 1000)
      })

}

export const deletePost = (_id) => async dispatch => {

    //do something
    dispatch({
        type: DELETE_POST,
        payload:{
            _id
        }
    })

    return new Promise((resolve, reject) => {
        let wait = setTimeout(() => {
          resolve('Promise A win!');
        }, 1000)
      })

}