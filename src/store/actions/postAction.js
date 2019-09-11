import { FETCH_POST } from './types'

export const fetchPosts = () => dispatch => {
    //do something
    dispatch({
        type: FETCH_POST,
        payload: ["1" , "2" , "3"]
    })
}