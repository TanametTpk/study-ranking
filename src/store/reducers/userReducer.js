import { REGISTER , GET_RANK, UPDATE_RANK } from '../actions/types'

const initState = {
    user:{},
    rank:[]
}

export default function(state = initState , action){

    switch (action.type) {
        case REGISTER:
            return {
                ...state,
                user:action.payload
            }
        case GET_RANK:

            action.payload.sort((a ,b) => b.time - a.time)
            
            let currentRank = 1
            let prevTime = -1

            let rank = action.payload.map((r) => {

                if (prevTime > r.time) currentRank++
                prevTime = r.time

                return {
                    key:r.user._id,
                    time:r.time,
                    name:r.user.name,
                    rank: currentRank
                }
            })

            return {
                ...state,
                rank
            }

        case UPDATE_RANK:
            let currentItems = [action.payload]

            // replace item
            let updateRank = state.rank.map(
                obj => {
                    let item = currentItems.find(o => o._id === obj.key)
                    if (!item) return obj
                    obj.time = item.time
                    return obj
                }
            ).sort((a ,b ) => b.time - a.time)

            let newCurrentRank = 1
            let newTime = -1

            let newRank = updateRank.map((r) => {

                if (newTime > r.time) newCurrentRank++
                newTime = r.time

                return {
                    key:r.key,
                    time:r.time,
                    name:r.name,
                    rank: newCurrentRank
                }
            })

            return {
                ...state,
                rank:newRank
            }

        default:
            return state
    }

}

// don't need to save get user