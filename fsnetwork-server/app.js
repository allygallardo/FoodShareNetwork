// App.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import studentRoutes from "./routes/student_routes.js";
import postRoutes from "./routes/post_routes.js";
import authRoutes from "./routes/auth_routes.js";
import cookieParser from "cookie-parser";
import commentRoutes from "./routes/comment_routes.js";
//import providerRoutes from "./routes/provider_routes.js";

/*
    Part I: SETUP
*/
const app = express();            

// Connect to the MongoDB Database using the string MONGO in .env
dotenv.config();
const connect = () => {
    mongoose
    .connect(process.env.MONGO)
    .then(() =>{ 
        console.log("Connected to DB");
    })
    .catch((err) => {
        throw err;
    });
};


/*
    Part II: ROUTES
*/
app.use(cookieParser())
app.use(express.json())    // allows app to read incoming json data from client
app.use("/api/auth", authRoutes)
app.use("/api/students", studentRoutes)
app.use("/api/posts", postRoutes)
app.use("/api/comments", commentRoutes)

//app.use("/api/providers", providerRoutes)


app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong!";
    return res.status(status).json({
        success: false,
        status,
        message
    });
});

/*
    Part III: LISTENER
*/
app.listen(3000, () => {           
    connect()
    console.log("Connected to server")
});