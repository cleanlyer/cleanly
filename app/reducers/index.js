import { combineReducers } from 'redux'
import track from './track'
import gamify from './gamify'

export default combineReducers({
    track, gamify
});