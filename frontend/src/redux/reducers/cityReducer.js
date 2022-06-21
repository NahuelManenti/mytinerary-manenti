const initialState = { //defino el estado inicial del reductor
    cities: [],
    filterCity: [],
    oneCity: {},
    auxCities: []
}

const cityReducer = (state = initialState, action) => { //defino el reductor, que va a depender del estado inicial y de una accion
    switch(action.type) {
        case 'GET_CITIES':
            return {
                ...state,
                cities: action.payload
            }
        case 'UPD_CITY':
            let cities = [...state.cities]
            cities.push(action.payload)
            return{
                ...state,
                cities: action.payload,
                auxCities: [...cities]
            }
        case 'DEL_CITY':
            return {
                ...state,
                cities: action.payload
            }
/*         case 'MOD_CITY':
            let cities = [...state.cities]
            cities.push(action.payload)
            return{
                ...state,
                cities: action.payload,
                auxCities: [...cities]
            } */
        case 'ONE_CITY':
            return {
                ...state,
                oneCity: action.payload
            }
        case 'FIL_CITIES':
            let filter = state.cities.filter(everyCity => everyCity.city.toLowerCase().startsWith(action.payload.toLowerCase()))
            //console.log(action.payload)
            return {
                ...state,
                filterCity: filter
            }
        default:
            return state
    }
}
export default cityReducer