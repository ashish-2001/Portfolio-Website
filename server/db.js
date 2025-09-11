import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        trim: true
    },

    phoneNumber:{
        type: Number,
        required: true,
        trim: true
    },

    message: {
        type: String,
        required: true,
    }
});

const User = mongoose.model("User", userSchema);

export {
    User
}