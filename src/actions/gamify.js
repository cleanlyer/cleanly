import * as types from "./types"

export function updateScore(points){
    return (dispatch) => {
        dispatch({ type: types.UPDATE_SCORE, payload: points })
    }
}