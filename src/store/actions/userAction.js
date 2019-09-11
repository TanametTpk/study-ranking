import { GET_USER , REGISTER , GET_RANK } from './types'

export const userRegister = (name) => async dispatch => {

    //do something
    dispatch({
        type: REGISTER,
        payload: {_id: "3" , name: "Joe Black"}
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

    return new Promise((resolve, reject) => {
        let wait = setTimeout(() => {
          resolve('Promise A win!');
        }, 1000)
      })

}

export const getRanking = (_id) => async dispatch => {

    //do something
    dispatch({
        type: GET_RANK,
        payload: [
            {
                user:{
                    _id: '1',
                    name: 'John Brown',
                },
                time:32
            },
            {
                user:{
                        _id: '2',
                        name: 'Jim Green',
                },
                time: 42,
            },
            {
                user:{
                        _id: '3',
                        name: 'Joe Black',
                },
                time: 15,
            },
            {
                user:{
                        _id: '4',
                        name: 'Jim Red',
                },
                time: 32,
            }
        ]
    })

    return new Promise((resolve, reject) => {
        let wait = setTimeout(() => {
          resolve('Promise A win!');
        }, 1000)
      })

}