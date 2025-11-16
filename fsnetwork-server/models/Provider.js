import mongoose from "mongoose";

const ProviderSchema = new mongoose.Schema(
    {
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true
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
    missionStatement: {
        type: String,
        required: false,
    },
    openingHours: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    possibleFoods: {
        type: [String],
        default: [],
        required: false,
    },
    isVeganFriendly: {
        type: Boolean,
        required: true,
    },
    isVegetarianFriendly: {
        type: Boolean,
        required: true,
    },
    isDairyFreeFriendly: {
        type: Boolean,
        required: true,
    },
    isGlutenFreeFriendly: {
        type: Boolean,
        required: true,
    },
    isKosherFriendly: {
        type: Boolean,
        required: true,
    },
    isHalalFriendly: {
        type: Boolean,
        required: true,
    }

});

export default mongoose.model("Provider", ProviderSchema);