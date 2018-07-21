import { createReducer } from 'redux-create-reducer'
import { combineReducers } from 'redux'
import * as types from '../actions/types'

export const userCoordinates = createReducer(false , {
    [types.UPDATE_USER_LOCATION](state, action) {
        return action.payload.coords
    }
})

export default combineReducers({ userCoordinates })