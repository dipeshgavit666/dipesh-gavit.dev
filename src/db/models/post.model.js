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
        required: [true, "content is required"]
    },
    tags: [{
        type: String
    }]
}, {timestamps: true})

export const Post = mongoose.model('post', postSchema);