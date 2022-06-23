
import {combineReducers} from 'redux'

import cityReducer from './cityReducer'
import tineraryReducer from './tineraryReducer'
const mainReducer = combineReducers({cityReducer,tineraryReducer})

export default mainReducer