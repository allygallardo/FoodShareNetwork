import mongoose from "mongoose";
import Student from "../models/Student.js";
import Provider from "../models/Provider.js";
import { createError } from "../error.js";
import bcrypt from "bcryptjs";                      // used for password encrption
import jwt from "jsonwebtoken";                     // used for access tokens for authentication

// student sign up
export const studentsignup = async (req,res,next) => {
    try{
        // Hash the student password before we save them to the DB
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newStudent = new Student({...req.body, password: hash});

        //Save Student user to Mongo DB
        await newStudent.save(); 
        res.status(200).send("Student has been created!")
    }catch(err){
        next(err)
    }
};

// student sign in 
export const studentsignin = async (req,res,next) => {
    try{
        // If the user doesn't exist then display error message
        const student = await Student.findOne({username:req.body.username})
        if(!student) return next(createError(404, "User not found!"))

        // If the user has incorrect password then display error message
        const isCorrect = await bcrypt.compare(req.body.password, student.password)
        if(!isCorrect) return next(createError(400, "Wrong credentials!"))  

        // Create token using the student id and a random string in .env
        const token = jwt.sign({id:student._id}, process.env.JWT)
    
        // Attach token to a cookie to be returned to the client. 
        // We don't want to return the complete student object because it contains
        // the hashed password, so remove it from the json object.
        const {password, ...others} = student._doc;
        res
        .cookie("access_token", token,{
            httpOnly:true
        })
        .status(200)
        .json(student);

    }catch (err) {
        next(err)
    }
};

// provider sign up
export const providersignup = async (req,res,next) => {
    try{
        // Hash the student password before we save them to the DB
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newProvider = new Provider({...req.body, password: hash});

        //Save Prvoider user to Mongo DB
        await newProvider.save(); 
        res.status(200).send("Provider has been created!")
    }catch(err){
        next(err)
    }
};

// Provider sign in 
export const providersignin = async (req,res,next) => {
    try{
        // If the user doesn't exist then display error message
        const provider = await Provider.findOne({username:req.body.username})
        if(!provider) return next(createError(404, "User not found!"))

        // If the user has incorrect password then display error message
        const isCorrect = await bcrypt.compare(req.body.password, provider.password)
        if(!isCorrect) return next(createError(400, "Wrong credentials!"))  

        // Create token using the student id and a random string in .env
        const token = jwt.sign({id:provider._id}, process.env.JWT)
    
        // Attach token to a cookie to be returned to the client. 
        // We don't want to return the complete student object because it contains
        // the hashed password, so remove it from the json object.
        const {password, ...others} = provider._doc;
        res
        .cookie("access_token", token,{
            httpOnly:true
        })
        .status(200)
        .json(provider);

    }catch (err) {
        next(err)
    }
};