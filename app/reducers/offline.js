import { createReducer } from 'redux-create-reducer'
import { combineReducers } from 'redux'
import * as types from '../actions/types'
import { List } from 'immutable'

export const report = createReducer(List(), {
    [types.SEND_REPORT_OFFLINE](state, action) {
        return state.push(action.payload)
    }
})

export const clean = createReducer(List(), {
    [types.SEND_CLEAN_OFFLINE](state, action) {
        return state.push(action.payload)
    }
})

export default combineReducers({ report, clean })