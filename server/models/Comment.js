import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
    {
    studentID: {
        type: String,
        required: true,
    },
    postID: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
    imgURL: {
        type: String,
    }
});

export default mongoose.model("Comment", CommentSchema);