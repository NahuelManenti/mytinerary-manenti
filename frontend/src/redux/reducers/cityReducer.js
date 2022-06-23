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
                cities: action.payload,
                filterCity: action.payload //filtrado
            }
        case 'UPLOAD_CITY':
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
        case 'ONE_CITY':
            return {
                ...state,
                oneCity: action.payload
            }
        case 'FILTER_CITIES':
            let cityFilter = state.cities.filter(city => city.name.toLowerCase().startsWith(action.payload.trim().toLowerCase()))
            return {
                ...state,
                filterCity: cityFilter
            }
        default:
            return state
    }
}
export default cityReducer