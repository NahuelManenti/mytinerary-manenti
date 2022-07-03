import React, { useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import userActions from '../redux/actions/userActions'


export default function GoogleSignUp() {
    const dispatch = useDispatch();


    async function handleCallbackResponse(response) {
        // console.log(response.credential);
        let  userObject = jwt_decode(response.credential);
        // console.log(userObject);
         dispatch(userActions.signUpUser({
            name: userObject.given_name,
            lastName: userObject.family_name, 
            userPhoto: userObject.picture, 
            email: userObject.email, 
            password: userObject.sub,
            country: "internet",
            role: "user", 
            from: "google"
        }))
    }

    useEffect(() => {
        /* global google */
            google.accounts.id.initialize({
            client_id: '105178745210-rapnjm1opi0i5t9avdvj074ffvcbqka4.apps.googleusercontent.com',
            callback: handleCallbackResponse
        });

        google.accounts.id.renderButton(
            document.getElementById('buttonDiv'),
            { theme: "outline", size: "medium", locale: "EN", text:"signup_with" }
        )// eslint-disable-next-line
    },[]);

    return (
        <div>
            <div id='buttonDiv'></div>
        </div>
    )
}
