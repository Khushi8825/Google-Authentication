import React from 'react'
import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const HomePage = () => {
    const navigate = useNavigate(); //gives a function that lets your app automatically move the user from one page to another.
                                    //After completing a process or when required
    
    //useEffect(() => {...}, []) runs once when the page loads, 
    // and here it extracts the Google auth code from the URL and sends it to the backend
    useEffect(()=>{
        const code = new URLSearchParams(window.location.search).get("code");
        console.log("Auth code: ",code);

        if(code){
            sendCodeToBackend(code);
        }
    }, [])

    //sendCodeToBackend() sends the Google authorization code to the backend for verification 
    //and redirects the user after successful login.`
    const sendCodeToBackend = async(code) => {
        try{
            const response = await axios.post("http://localhost:5000/auth/google", {code})
            console.log("Google response: ",response)
            navigate("/dashboard");
        }
        catch(error){
            console.log(error);
        }
    }

    return (
        <div>
            <h1> Homepage </h1>
        </div>
    );
}

export default HomePage;