import mongoose from "mongoose";   //for connecting to mongoDB
import User from "../models/user.models.js";
import { OAuth2Client } from "google-auth-library";  //for handling Google OAuth
import dotenv from "dotenv";  //to load variables from .env file

dotenv.config();

const client = new OAuth2Client(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    "http://localhost:5173/home"
)

const googleController = async (req, res) => {
    try {
        const { code } = req.body;
        console.log("Authorization code: ", code);

        // code exchange with google
        const { tokens } = await client.getToken(code);  // get access and id token

        // verify ID token
        const ticket = await client.verifyIdToken({
            idToken: tokens.id_token,
            audience: process.env.GOOGLE_CLIENT_ID
        })

        // gbet user info from ticket
        const payload = ticket.getPayload();
        console.log("Payload: ", payload);

        const { name, email, picture, sub } = payload;

        // checking existing user in db
        let user = await User.findOne({ email });

        if (!user) {
            user = await User.create({
                name,
                email,
                googleId: sub,
                avatar: picture
            })
        }
        return res.status(200).json({
            success: true,
            message: "Google Login Success",
            user,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Google Login Failed" });
    }

}
export default googleController;

