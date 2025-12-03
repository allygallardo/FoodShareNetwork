import mongoose from "mongoose";

const NotificationSchema = new mongoose.Schema(
    {
    providerID: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
});

export default mongoose.model("Notification", NotificationSchema);