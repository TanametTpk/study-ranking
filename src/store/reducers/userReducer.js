import { REGISTER , GET_RANK } from '../actions/types'

const initState = {
    user:{},
    userRank:{rank:1 , time:0},
    rank:[]
}

export default function(state = initState , action){

    switch (action.type) {
        case REGISTER:
            return {
                user:action.payload
            }
        case GET_RANK:

            let userRank = 1
            let userTime = 0

            action.payload.sort((a ,b) => b.time - a.time)
            
            let currentRank = 1
            let prevTime = -1

            let rank = action.payload.map((r) => {

                if (prevTime > r.time) currentRank++
                prevTime = r.time

                if (state.user._id === r.user._id){
                    userRank = currentRank
                    userTime = r.time
                }

                return {
                    key:r.user._id,
                    time:r.time,
                    name:r.user.name,
                    rank: currentRank
                }
            })

            return {
                ...state,
                userRank:{
                    rank:userRank,
                    time:userTime
                },
                rank
            }

        default:
            return state
    }

}

// don't need to save get user