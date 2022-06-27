
import {combineReducers} from 'redux'

import cityReducer from './cityReducer'
import tineraryReducer from './tineraryReducer'
import userReducer from './userReducer'

const mainReducer = combineReducers({cityReducer,tineraryReducer,userReducer})

export default mainReducer