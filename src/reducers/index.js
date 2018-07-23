import { combineReducers } from 'redux'
import track from './track'
import gamify from './gamify'
import offline from './offline'

export default combineReducers({
    track, gamify, offline
})