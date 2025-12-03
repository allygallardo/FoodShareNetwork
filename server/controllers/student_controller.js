import {createError} from "../error.js";
import Student from "../models/Student.js";


export const updateStudent =async (req,res,next)=>{
    // If the user data from the access token and the current user data are the same,
    // update the user info
    // else display an error message
    if(req.params.id === req.user.id){
        try{
            const updatedStudent = await Student.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedStudent);
        } catch (err) {
            next(err);
        }
    }else{
        return next(createError(403, "You can only update your account"))
    }
};

export const deleteStudent =async (req,res,next)=>{
    if(req.params.id === req.user.id){
        try{
            await Student.findByIdAndDelete(req.params.id,);
            res.status(200).json("User has been deleted");
        } catch (err) {
            next(err);
        }
    }else{
        return next(createError(403, "You can only delete your account"))
    }

};

export const getStudent = async (req,res,next)=>{
    try{
        const user = await Student.findById(req.params.id)
        res.status(200).json(user)
    }catch(err){
        next(err)
    }
};

// subscribe or unsubscribe to providers
