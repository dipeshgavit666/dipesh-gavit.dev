import mongoose from "mongoose";
import { describe, expect, test} from "@jest/global";
import { createPost } from "../services/post.js";
import { Post } from "../db/models/post.model.js";


describe("creating posts", () => {
    test("with all parameters should succeed", async () => {
        const post = {
            title: "Hello Mongoose",
            author: "Dipesh Gavit",
            contents: "This post is stored in a mongoDB databse using mongoose",
            tages: ["mongoose", "mongodb"],
        }

        const createdPost = await createdPost(post)
        expect(createdPost._id).toBeInstanceOf(mongoose.Types.ObjectId)

        const foundPost = await Post.findById(createPost._id)
        expect(foundPost).toEqual(expect.objectContaining(post))
        expect(foundPost.createdAt).toBeInstanceOf(Date)
        expect(foundPost.updateddAt).toBeInstanceOf(Date)
    })

    test("creating posts without title should fail", async () => {
        const post = {
            author: "Dipesh Gavit",
            contents: "POst with no title",
            tages: ["empty"],
        }
        try {
            await createPost(post)
        } catch (err) {
            expect(err).toBeInstanceOf(mongoose.Error.ValidationError)
            expect(err.message).toContain("`title is required`")
        }
    })

    test("creating posts with minimal parameters should succees", async () => {
         const post = {
            title: "only a title",
        }
        const createdPost = await createdPost(post)
        expect(createdPost._id).toBeInstanceOf(mongoose.Types.ObjectId)
    })
})