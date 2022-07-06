import axios from 'axios'

let urlLocalHost ='http://localhost:4000/'//mas adelante va mi direcion hosteada

const tineraryActions = {
    
    getTineraries: () => {
        return async(dispatch, getState) => {
            const res = await axios.get(urlLocalHost+`api/tineraries`)
            dispatch({type:'GET_TINERARIES', payload:res.data.response.tineraries})
        }
    },

    uploadTinerary: (city,managerPhoto,managerName,itinerary,price,time,tags,description,likes)=>{
        return async(dispatch,getState)=>{
            const res = await axios.post(urlLocalHost+'api/tineraries',{city,managerPhoto,managerName,itinerary,price,time,tags,description,likes})
            dispatch({type:'UPLOAD_TINERARY', payload:res.data.response.tineraries})
        }
    },

    deleteTin: (id) => {
        return async(dispatch, getState) => {
            try {
                const res = await axios.delete(urlLocalHost+`api/tineraries/${id}`)
                dispatch({type:'DEL_TINERARY', payload:res.data.response.tineraries})
            }catch (err) {
                console.log(err)
            }
        }
    },

    oneTinerary: (id) => {
        //console.log(id)
        return async() => {
            try {
                const res = await axios.get(urlLocalHost+`api/tineraries/${id}`)
                return res.data.response.tinerary
            }catch (err) {
                console.log(err)
            }
        }
    },

    findFromCity: (id) => {
        //console.log(id);
        return async(dispatch, getState) => {
            try {
                const res = await axios.get(urlLocalHost+`api/tineraries/cities/${id}`)
                //console.log(answer.data);
                dispatch({type:'FILTER_TINERARIES', payload:res.data.response.tineraries})
                // console.log(res)
            }catch (err) {
                console.log(err)
            }
        }
    },

    likeDislike: (id) => {
        const token = localStorage.getItem('token')
        return async() => {
            try {
                const res = await axios.put(urlLocalHost+`api/tineraries/likeDislike/${id}`,{},
                    {headers: {Authorization: "Bearer "+token}}
                )
                //console.log(res.data.response)
                return res.data.response
            }catch (err) {
                console.log(err)
            }
        }
    }


}

export default tineraryActions;