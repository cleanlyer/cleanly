import { createReducer } from 'redux-create-reducer'
import { combineReducers } from 'redux'
import * as types from '../actions/types'

export const score = createReducer(0 , {
    [types.UPDATE_SCORE](state, action) {
        return state + action.payload
    }
})

export default combineReducers({ score })