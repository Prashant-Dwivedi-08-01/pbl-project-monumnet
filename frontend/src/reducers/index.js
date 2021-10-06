import { FETCH, SCORE } from "../constants/actionTypes";

const reducer = (state = { data:{}, count: 0, score: 0 }, action) => {
    switch (action.type) {
        case FETCH:
            return { ...state, data: action.payload.data, count :  action.payload.count + 1 }
        case SCORE:
            return {...state, score:  action.payload.points + 100}
        default:
            return state;
    }
}

export default reducer;