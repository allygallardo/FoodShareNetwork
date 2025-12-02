import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema(
    {
    fname: {
        type: String,
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
    },
    isVegetarian: {
        type: Boolean,
    },
    isDairyFree: {
        type: Boolean,
    },
    isGlutenFree: {
        type: Boolean,
    },
    isKosher: {
        type: Boolean,
    },
    isHalal: {
        type: Boolean,
    },
    isNutFree: {
        type: Boolean,
    }

});

export default mongoose.model("Student", StudentSchema);