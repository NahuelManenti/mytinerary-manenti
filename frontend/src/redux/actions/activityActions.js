import axios from 'axios';

let myUrlHost = 'http://localhost:4000/'


const activityActions = { 

    getActivities: () => {
        return async(dispatch, getState) => {
            const res = await axios.get(myUrlHost+`api/activities`)
            dispatch({type:'GET_ACTIVITIES', payload:res.data.response.activities})
        }
    },

    uploadActivity: (itinerary,activity,name)=>{
        return async(dispatch,getState)=>{
            const answer = await axios.post(myUrlHost+'api/activities',{itinerary,activity,name})
            dispatch({type:'UPD_ACTIVITY', payload:answer.data.response.activities})
        }
    },

    deleteAct: (id) => {
        return async(dispatch, getState) => {
            try {
                const answer = await axios.delete(myUrlHost+`api/activities/${id}`)
                dispatch({type:'DEL_ACTIVITY', payload:answer.data.response.activities})
            }catch (err) {
                console.log(err)
            }
        }
    },

    oneActivity: (id) => {
        return async(dispatch, getState) => {
            try {
                const answer = await axios.get(myUrlHost+`api/activities/${id}`)
                dispatch({type:'ONE_ACTIVITY', payload:answer.data.response.activities})
            }catch (err) {
                console.log(err)
            }
        }
    },

    findActFromTin: (id) => {
        return async () => {
            try {
                let answer = await axios.get(myUrlHost+`api/activities/tineraries/${id}`)
                return { //NO DESPACHA! RETURNA PARA SETEAR UN HOOK COMÚN
                    success: true, response: answer.data.response.activities
                }
            }
            catch (error) {
                return {
                    success: false, response: error.messagge
                }
            }
        }
    }

}

export default activityActions