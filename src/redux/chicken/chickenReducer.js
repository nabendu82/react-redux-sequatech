import { BUY_CHICKEN } from "./chickenTypes"

const initialChickenState = {
    numOfChikens: 10
}

const chickenReducer = (state=initialChickenState, action) => {
    switch(action.type){
        case BUY_CHICKEN: return {
            ...state,
            numOfChikens: state.numOfChikens - 1
        }
        default: return state
    }
}

export default chickenReducer