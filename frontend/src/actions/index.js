import * as api from "../api/index";
import { FETCH, SCORE } from "../constants/actionTypes";

export const getMonument = (name, count) => async(dispatch) => {
    try {
        const { data } = await api.fetchMonument(name);
        const payloadData = {
            data: data,
            count: count
        }
        const action = {
            type:FETCH,
            payload: payloadData
        }
        dispatch(action);

    } catch (error) {
        console.log("Error is Fetch Monument ",error.message);
    }
}
export const updateScore = (points) => async(dispatch) => {
    try {

        const payloadData = {
            points: points
        }
        const action = {
            type:SCORE,
            payload: payloadData
        }
        dispatch(action);

    } catch (error) {
        console.log("Error is Fetch Monument ",error.message);
    }
}
