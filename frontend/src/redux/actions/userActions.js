import axios from 'axios'

let urlLocalHost = 'http://localhost:4000/'

 const userActions = {
    signUpUser: (userData) => {
        //console.log(userData)
        return async (dispatch, getState) => {
            const res = await axios.post(urlLocalHost+'api/auth/signUp', {userData})
            // console.log(res)
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
            const res = await axios.post(urlLocalHost+'api/auth/logIn',{userLogin})
            console.log(res.data)
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
     signOutUser: (closeData) => {
        // console.log(closeData)
        return async (dispatch, getState) => {
            await axios.post(urlLocalHost+'api/auth/signOut',{closeData})
            //  console.log(res)
            localStorage.removeItem('token')
            dispatch({
                type: 'user',
                payload: null
            })
        }   
    },
    verifyToken: (token) => {
        // console.log(token)
        return async (dispatch, getState) => {
            //console.log(token)
            await axios.get(urlLocalHost+'api/auth/loginToken', {headers: {'Authorization': 'Bearer '+token}} )
            .then(user=> {if(user.data.success){
                dispatch({ type: 'user', payload:user.data.response});
                dispatch({ type: 'message',
                        payload: {view: true,
                        message: user.data.message,
                        success: user.data.success}
            });
            } else {localStorage.removeItem('token')}
            }
            ).catch(error => {
                if(error.response.status === 401)
                    dispatch({type: 'message',
                        payload: {view: true,
                        message: "Please, sign In Again",
                        success: false}})
            localStorage.removeItem('token')
            })
    }
}
}


export default userActions