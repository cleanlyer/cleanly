import * as types from "./types"

export function updateUserCoordinates(){
    return (dispatch) => {
        navigator.geolocation.getCurrentPosition((coordinates) => {
            dispatch({ type: types.UPDATE_USER_LOCATION, payload: coordinates })
        })
    }
}

export function updateGarbageList(){
    return (dispatch) => {
        fetch('https://rocky-dusk-51136.herokuapp.com/garbage', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then((response) => response.json())
        .then((responseJson) => {
            dispatch( { type: types.GET_GARBAGE, payload: responseJson })
        })
        .catch(() => {
            dispatch( { type: types.GET_GARBAGE_OFFLINE })
        })
    }
}

export function sendReport(report){
    return (dispatch) => {
        fetch('https://rocky-dusk-51136.herokuapp.com/garbage', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(report),
        })
        .catch(() => {
            dispatch( { type: types.SEND_REPORT_OFFLINE, payload: report })
        })
        .finally(() => {
            if(!report.isClean)
                dispatch( { type: types.SEND_REPORT, payload: report })
        })
    }
    
}

export function sendClean(id){
    return (dispatch) => {
        fetch(`https://rocky-dusk-51136.herokuapp.com/garbage/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then((_) => {
                dispatch( { type: types.SEND_CLEAN, payload: id })
        })
        .catch((error) => {
            console.error(error)
        })
        
    }
}
