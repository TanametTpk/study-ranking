import { FETCH_POST , ADD_POST } from '../actions/types'

const initState = {
    items:[],
    item:{}
}

export default function(state = initState , action){

    switch (action.type) {
        case FETCH_POST:
            return {
                ...state,
                items:action.payload
            }
    
        case ADD_POST:
            return {
                ...state,
                items:[ ...state.items , action.payload ]
            }
        default:
            return state
    }

}