import * as types from "./types"

export function updateUserCoordinates(){
    return (dispatch) => {
        navigator.geolocation.getCurrentPosition((coordinates) => {
            dispatch({ type: types.UPDATE_USER_LOCATION, position: coordinates })
        })
    }
}
