import axios from 'axios'

let urlLocalHost = 'http://localhost:4000/'

 const userActions = {
    signUpUser: (userData) => {
        //console.log(userData)
        return async (dispatch, getState) => {
            const res = await axios.post(urlLocalHost+'api/auth/signUp', {userData})
            //console.log(res)
            dispatch({
                type: 'message',
                payload: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }
            })
        }
    },
    logInUser: (userLogin) => {
        //console.log(userLogin)
        return async (dispatch, getState) => {
            const res = await axios.post(urlLocalHost+'api/auth/logIn', {userLogin})
            //console.log(res)
            if(res.data.success) {
                localStorage.setItem('token',res.data.response.token)
                dispatch({
                    type: 'user',
                    payload: res.data.response.userData
                })
            } else {
                dispatch({
                    type: 'message',
                    payload: {
                        view: true,
                        message: res.data.message,
                        success: res.data.success
                    }
                })
            }
        } 
    },
    
}

export default userActions