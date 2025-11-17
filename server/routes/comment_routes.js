import express from "express";
import {addComment, updateComment, deleteComment, getComments} from "../controllers/comment_controller.js";
import {verifyToken} from "../verifyToken.js";

const router = express.Router();

router.post("/", verifyToken, addComment)
router.put("/:id", verifyToken, updateComment)
router.delete("/:id", verifyToken, deleteComment)
router.get("/:postID", getComments)


export default router;