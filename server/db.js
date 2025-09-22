import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },

    lastName: {
        type: String,
        trim: true,
        required: true
    },

    email: {
        type: String,
        required: true,
        trim: true
    },

    phoneNumber:{
        type: String,
        required: true,
        trim: true
    },

    message: {
        type: String,
        required: true,
    }
}, { 
    timestamps: true
});

const User = mongoose.model("User", userSchema);

export {
    User
}