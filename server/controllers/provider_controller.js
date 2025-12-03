import {createError} from "../error.js";
import Provider from "../models/Provider.js";


export const updateProvider =async (req,res,next)=>{
    // If the user data from the access token and the current user data are the same,
    // update the user info
    // else display an error message
    if(req.params.id === req.user.id){
        try{
            const updatedProvider = await Provider.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedProvider);
        } catch (err) {
            next(err);
        }
    }else{
        return next(createError(403, "You can only update your account"))
    }
};

export const deleteProvider =async (req,res,next)=>{
    if(req.params.id === req.user.id){
        try{
            await Provider.findByIdAndDelete(req.params.id,);
            res.status(200).json("User has been deleted");
        } catch (err) {
            next(err);
        }
    }else{
        return next(createError(403, "You can only delete your account"))
    }

};

export const getProvider = async (req,res,next)=>{
    try{
        const user = await Provider.findById(req.params.id)
        res.status(200).json(user)
    }catch(err){
        next(err)
    }
};

export const getProviders = async (req, res, next) => {
  try {
    const providers = await Provider.find().sort({ "_id": -1 });
    res.status(200).json(providers);
  } catch (err) {
        next(err);
  }
};

