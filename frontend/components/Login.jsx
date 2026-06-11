import React from 'react';
const clientID = import.meta.env.GOOGLE_CLIENT_ID;
const Login=()=>{
    const googleLoginHandle = () =>{
        const rooturl = "https://accounts.google.com/o/oauth2/v2/auth";
        const options = {
            client_id: clientID,
            redirect_uri: "http://localhost:5173/home",
            response_type: "code",
            scope: "openid profile email",
            access_type: "offline",
            prompt: "consent"
        }
        const query = new URLSearchParams(options);
        window.location = `${rooturl}?${query.toString()}`;
    }
    return (
        <button onClick = {googleLoginHandle}>Login with Google</button>
    )
}
export default Login;
