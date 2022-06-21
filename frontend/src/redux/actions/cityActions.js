import axios from 'axios'

let urlMyTin = 'http://localhost:4000/'//https://mytinerary-borraz.herokuapp.com/
//let urlMyTin ='http://localhost:4000/'

const cityActions = {

    getCities: () => {
        return async(dispatch, getState) => {
            const res = await axios.get(urlMyTin+`api/cities`)
            dispatch({type:'GET_CITIES', payload:res.data.response.cities})
        }
    },

    uploadCity: (continent,country,city,photo,population)=>{
        return async(dispatch,getState)=>{
            const answer = await axios.post(urlMyTin+'api/cities',{continent,country,city,photo,population})
            dispatch({type:'UPD_CITY', payload:answer.data.response.cities})
        }
    },

    deleteCity: (id) => {
        return async(dispatch, getState) => {
            try {
                const answer = await axios.delete(urlMyTin+`api/cities/${id}`)
                dispatch({type:'DEL_CITY', payload:answer.data.response.cities})
            }catch (err) {
                console.log(err)
            }
        }
    },

    oneCity: (id) => {
        return async(dispatch, getState) => {
            try {
                const answer = await axios.get(urlMyTin+`api/cities/${id}`)
                dispatch({type:'ONE_CITY', payload:answer.data.response.cities})
            }catch (err) {
                console.log(err)
            }
        }
    },

    filterCities: (input) => {
        return (dispatch,getState)=>{
            dispatch({type:'FIL_CITIES', payload:input})
        }
    }
}

export default cityActions