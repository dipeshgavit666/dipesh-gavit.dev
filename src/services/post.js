import { Post } from "../db/models/post.model";

//create post
export async function createPost({title, author, contents, tags}) {
    const post = new Post({title, author, contents, tags})
    return post.save()
}

//delete post
//update post
//get all posts
