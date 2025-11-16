import express from "express";
import {addPost, updatePost, deletePost, getPost, random, trend, sub, getByTag} from "../controllers/post_controller.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

//create a post
router.post("/", verifyToken, addPost)

//update a post
router.put("/:id", verifyToken, updatePost)

//delete a post
router.delete("/:id", verifyToken, deletePost)

//get a post
router.get("/find/:id", getPost)

//get random posts
router.get("/random", random)

//get trend posts
router.get("/trend", trend)

//get subscribed posts-maybe
router.get("/sub", verifyToken, sub)

//search posts by tags
router.get("/tags", getByTag)



export default router;