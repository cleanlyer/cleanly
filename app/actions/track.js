import * as types from "./types"

export function updateUserCoordinates(){
    return (dispatch) => {
        navigator.geolocation.getCurrentPosition((coordinates) => {
            dispatch({ type: types.UPDATE_USER_LOCATION, position: coordinates })
        })
    }
}

export function sendReport(payload){
    return (dispatch) => {
        //call back-end with payload
        dispatch( { type: types.SEND_REPORT, payload: payload })
    }
}
