const initialState = { 
    tineraries: [],
    filterTin: [],
    auxTineraries: []
}

const tineraryReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_TINERARIES':
            return {
                ...state,
                tineraries: action.payload
            }
        case 'UPLOAD_TINERARY':
            let tineraries = [...state.tineraries]
            tineraries.push(action.payload)
            return{
                ...state,
                tineraries: action.payload,
                auxTineraries: [...tineraries]
            }
        case 'DEL_TINERARY':
            return {
                ...state,
                tineraries: action.payload
            }

        case 'FILTER_TINERARIES':
            return {
                ...state,
                filterTin: action.payload
            }
        default:
            return state
    }
}
export default tineraryReducer