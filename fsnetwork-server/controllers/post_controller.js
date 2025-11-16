import express from "express";
import Post from "../models/Post.js";
import Student from "../models/Student.js";
import {createError} from "../error.js";

const router = express.Router();

export const addPost = async (req, res, next) =>{
    const newPost = new Post({studentID: req.user.id, ...req.body});
    try{
        const savedPost = await newPost.save()
        res.status(200).json(savedPost);

    }catch(err){next(err)}
};

// may have to change user like req.user.id 
export const updatePost = async (req, res, next) =>{
    try{
        const post = await Post.findById(req.params.id);
        if(!post) return next(createError(404, "Post not found!"));
        if(req.user.id === post.studentID){
            const updatedPost = await Post.findByIdAndUpdate(
                req.params.id,
            {
                $set: req.body,
            },
            { new: true } 
        );
        res.status(200).json(updatedPost)
        } else{
            return next(createError(403, "You can only update your own post"));
        }
    }catch(err){
        next(err);
    }
};

export const deletePost = async (req, res, next) =>{
    try{
        const post = await Post.findById(req.params.id);
        if(!post) return next(createError(404, "Post not found!"));
        if(req.user.id === post.studentID){
            await Post.findByIdAndDelete(
                req.params.id,
        );
        res.status(200).json("The post has been deleted");
        } else{
            return next(createError(403, "You can only delete your own post"));
        }
    }catch(err){
        next(err);
    }
};

export const getPost = async (req, res, next) =>{
    try{
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)
    }catch (err) {
        next(err);
    }
};

export const random = async (req, res, next) =>{
    try{
        const posts = await Post.aggregrate([{ $sample: { size: 40 } }]);
        res.status(200).json(posts)
    }catch (err) {
        next(err);
    }
};

export const trend = async (req, res, next) =>{
    try{
        // bring the most liked posts
        const posts = await Post.find().sort({likes:-1});
        res.status(200).json(posts)
    }catch (err) {
        next(err);
    }
};

// maybe do sub/unsub other students
// could do providers and students?
// or just providers?
export const sub = async (req, res, next) =>{
    try{
        const student = await Student.findById(req.user.id)
        const subscribedUsers = student.subscribedUsers;

        const list = Promise.all(
            subscribedUsers.map((userID) => {
                return Post.find({studentID: userID });
            })
        );

        res.status(200).json(list)
    }catch (err) {
        next(err);
    }
};

// TO TEST
export const getByTag = async (req, res, next) =>{
    const tags = req.query.tags.split(",")
    try{
        // bring the most liked posts
        const posts = await Post.find({tags:{$in: tags }}).limit(20);
        res.status(200).json(posts)
    }catch (err) {
        next(err);
    }
};