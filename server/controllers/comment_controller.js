import express from "express";
import Comment from "../models/Comment.js";
import Post from "../models/Post.js";
import {createError} from "../error.js";


export const addComment = async (req, res, next) =>{
    const newComment = new Comment({...req.body, studentID:req.user.id})
    try{
        const savedComment = await newComment.save()
        res.status(200).send(savedComment)
    }catch(err){
        next(err)
    }
};

// to TEST
export const updateComment = async (req, res, next) =>{
    try{

    }catch(err){
        next(err)
    }
};

// to TEST
export const deleteComment = async (req, res, next) =>{
    try{
        const comment = await Comment.findById(res.params.id)
        const post = await Post.findById(res.params.id)
        if(req.user.id === comment.studentID || req.user.id === post.studentID){
            await Comment.findByIdAndDelete(req.params.id)
            res.status(200).json("The comment has been deleted")
        }else{
            return next(createError(403, "You can only delete your own comment"))
        }
    }catch(err){
        next(err)
    }
};

export const getComments = async (req, res, next) =>{
    try{
        const comments = await Comment.find({postID: req.params.postID});
        res.status(200).json(comments);
    }catch(err){
        next(err)
    }
};