import axios from 'axios'

let urlMyTin = 'http://localhost:4000/'

const cityActions = {

    getCities: () => {
        return async(dispatch, getState) => {
            const res = await axios.get("http://localhost:4000/api/cities")
            dispatch({type:'GET_CITIES', payload:res.data.response.cities})
            
        }
    },

    uploadCity: (continent,country,city,photo,population)=>{
        return async(dispatch,getState)=>{
            const res = await axios.post(urlMyTin+'api/cities',{continent,country,city,photo,population})
            dispatch({type:'UPLOAD_CITY', payload:res.data.response.cities})
        }
    },

    deleteCity: (id) => {
        return async(dispatch, getState) => {
            try {
                const res = await axios.delete(urlMyTin+`api/cities/${id}`)
                dispatch({type:'DEL_CITY', payload:res.data.response.cities})
            }catch (err) {
                console.log(err)
            }
        }
    },

    oneCity: (id) => {
        return async(dispatch, getState) => {
            try {
                const res = await axios.get(`http://localhost:4000/api/cities/${id}`)
                // console.log(res)
                dispatch({type:'ONE_CITY', payload:res.data.response})
            }catch (err) {
                console.log(err)
            }
        }
    },

    filterCities: (input) => {
        return (dispatch,getState)=>{
            dispatch({type:'FILTER_CITIES', payload:input})
        }
    }
}

export default cityActions