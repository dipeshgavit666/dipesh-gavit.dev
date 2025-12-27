import mongoose, {Schema} from "mongoose";

const postSchema = new Schema({
    title: {
        type: String,
        required: [true, "title is required"]
    },
    author: {
        type: String,

    },
    contents: {
        type: String,
    },
    tags: [{
        type: String
    }]
}, {timestamps: true})

export const Post = mongoose.model('post', postSchema);