import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./db.js";
import googleController from "./controllers/google.controller.js"
import googleAuthRouter from "./routes/googleAuth.route.js"
dotenv.config() ; //reads your .env file, parses its keys and values, and injects them directly into the Node.js runtime process environment
const app = express() ; //initializes a new Express application instance and stores it in a constant named app.
const PORT = process.env.PORT || 5000 ; //defines the network port your server will use

app.use(cors()); //app.use(cors()) enables Cross-Origin Resource Sharing (CORS) for all routes. 
// It tells your server to allow requests coming from different domains, protocols, or ports (such as a React frontend on localhost:3000 talking to a Node server on localhost:5000)
app.use(express.json()); //When a client (like a frontend, Postman, or cURL) sends a POST or PUT request, the data travels as a raw text string.
//Without this middleware, Express cannot read this raw data, and req.body will return undefined

connectDB();
app.use("/auth", googleAuthRouter) ;  //This line mounts the googleAuthRouter on the /auth path, 
// so all routes defined inside the router become accessible with the /auth prefix (e.g., /auth/google)

app.listen(5000, ()=>{
    console.log(`server is running on port ${PORT}`) ;
})