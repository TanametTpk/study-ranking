import { FETCH_POST , ADD_POST , UPDATE_POST , DELETE_POST } from '../actions/types'

const initState = {
    items:[]
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
                items:[ action.payload , ...state.items ]
            }

        case UPDATE_POST:
            let currentItems = [action.payload]

            // replace item
            let updateState = state.items.map(
                obj => currentItems.find(o => o._id === obj._id) || obj
            );
            
            return {
                ...state,
                items:updateState
            }


        case DELETE_POST:
            let deletedItem = action.payload

            let deletedState = state.items.filter(
                o => o._id !== deletedItem._id
            )

            return {
                ...state,
                items:deletedState
            }

        default:
            return state
    }

}