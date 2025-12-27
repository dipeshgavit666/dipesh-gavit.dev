import { initDatabase } from "./db/init.js";
import {Post} from "./db/models/post.model.js";

await initDatabase()

const post = new Post({
    title: "Hellp Mogoose!",
    author: "Dipesh",
    contents: "this post is stored in mongodb databse usinig mongoose",
    tags: ["mongoose", "mongobd"],
})

const createdPost = await post.save()

const posts = await Post.find()
console.log(posts);
