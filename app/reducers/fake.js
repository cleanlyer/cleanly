import { createReducer } from 'redux-create-reducer'
import { combineReducers } from 'redux'
import * as types from '../actions/types'

export const active = createReducer(false , {
    [types.FAKE](state, action) {
        return state
    }
})

export default combineReducers({ active })