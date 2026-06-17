import React from "react";
const clientID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
console.log("Frontend Client ID coming: ", import.meta.env.VITE_GOOGLE_CLIENT_ID);
const Login = () => {
  const googleLoginHandle = () => {
    const rooturl = "https://accounts.google.com/o/oauth2/v2/auth";
    const options = {
      client_id: clientID,
      redirect_uri: "http://localhost:5173/home",
      response_type: "code",
      scope: "openid profile email",
      access_type: "offline",
      prompt: "consent",
    };
    const query = new URLSearchParams(options);
    window.location = `${rooturl}?${query.toString()}`;
  };
  return (
    <div className="h-12 w-24 border">
      <button onClick={googleLoginHandle}>Login with Google</button>
    </div>
  );
};
export default Login;
