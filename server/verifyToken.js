import jwt from "jsonwebtoken";
import {createError} from "./error.js";

export const verifyToken = (req, res, next) =>{

    //Get the access token from the cookie
    const token = req.cookies.access_token
    if(!token) return next(createError(401, "You are not authenticated!"))

    // Verify if access token is associated with the user
    jwt.verify(token, process.env.JWT, (err,user)=>{
        if (err) return next(createError(403, "Token is not valid"))

        // get the data for the user associated with the access token
        req.user = user;
        next()
    });
};