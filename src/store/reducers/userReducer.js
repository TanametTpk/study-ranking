import { REGISTER } from '../actions/types'

const initState = {
    user:{}
}

export default function(state = initState , action){

    switch (action.type) {
        case REGISTER:
            return {
                user:action.payload
            }

        default:
            return state
    }

}

// don't need to save get user