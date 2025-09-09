import mongoose from "mongoose";

const contactMeSchema = new mongoose.Schema({

    senderName:{
        type: String,
        trim: true,
        maxLength:80
    },

    senderEmail: {
        type: String,
        trim: true,
        minLength:3,
        maxLength:100,
        unique: true
    },

    senderPhoneNumber: {
        type: Number,
        unique:true,
        minLength:8,
        maxLength:12
    },

    SenderMessage:{
        type: String,
        minLength: 10
    }
});

export {
    contactMeSchema
}