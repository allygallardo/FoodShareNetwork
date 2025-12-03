import mongoose from "mongoose";

const ProviderSchema = new mongoose.Schema(
    {
    name: {
        type: String,
    },
    location: {
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
    missionStatement: {
        type: String,
    },
    openingHours: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
    },
    possibleFoods: {
        type: [String],
        default: [],
    },
    isVeganFriendly: {
        type: Boolean,
    },
    isVegetarianFriendly: {
        type: Boolean,
    },
    isDairyFreeFriendly: {
        type: Boolean,
    },
    isGlutenFreeFriendly: {
        type: Boolean,
    },
    isKosherFriendly: {
        type: Boolean,
    },
    isHalalFriendly: {
        type: Boolean,
    }

});

export default mongoose.model("Provider", ProviderSchema);