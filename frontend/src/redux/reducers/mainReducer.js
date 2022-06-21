//importo los componentes de REDUX:
import {combineReducers} from 'redux'

//importo los redutores de REDUX que se van a combinar:
import cityReducer from './cityReducer'
// import tineraryReducer from './tineraryReducer'
// import userReducer from './userReducer'
// import activityReducer from './activityReducer'

const mainReducer = combineReducers({cityReducer})//{cityReducer,tineraryReducer,userReducer,activityReducer}

export default mainReducer