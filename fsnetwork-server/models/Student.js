import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema(
    {
    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    subscribedUsers: {
        type: [String],
    },
    img: {
        type: String,
    },
    isVegan: {
        type: Boolean,
        required: true,
    },
    isVegetarian: {
        type: Boolean,
        required: true,
    },
    isDairyFree: {
        type: Boolean,
        required: true,
    },
    isGlutenFree: {
        type: Boolean,
        required: true,
    },
    isKosher: {
        type: Boolean,
        required: true,
    },
    isHalal: {
        type: Boolean,
        required: true,
    }

});

export default mongoose.model("Student", StudentSchema);