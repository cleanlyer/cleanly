import * as types from "./types"

export function updateUserCoordinates(){
    return (dispatch) => {
        navigator.geolocation.getCurrentPosition((coordinates) => {
            dispatch({ type: types.UPDATE_USER_LOCATION, payload: coordinates })
        })
    }
}

export function sendReport(report){
    return (dispatch) => {
        //call back-end with payload
        dispatch( { type: types.SEND_REPORT, payload: report })
    }
}

export function sendClean(id){
    return (dispatch) => {
        //call back-end to clean Id
        dispatch( { type: types.SEND_CLEAN, payload: id })
    }
}
