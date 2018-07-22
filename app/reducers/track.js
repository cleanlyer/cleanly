import { createReducer } from 'redux-create-reducer'
import { combineReducers } from 'redux'
import * as types from '../actions/types'
import { List } from 'immutable'

export const userCoordinates = createReducer({latitude: 12.12, longitude:12.12} , {
    [types.UPDATE_USER_LOCATION](state, action) {
        return action.payload.coords
    }
})

export const garbageCoordinates = createReducer(List() , {
    [types.SEND_REPORT](state, action) {
        return state.push(action.payload)
    },
    [types.SEND_CLEAN](state, action) {
        return state.filter(object => object.id != action.payload)
    },
    [types.GET_GARBAGE](state, action) {
        return List(action.payload)
    }
    
})

export default combineReducers({ userCoordinates, garbageCoordinates })