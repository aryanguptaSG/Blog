import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    post: {
        type: String,
        required: [true, "Please provide a Post Content"],
    },
    title: {
        type: String,
        required: [true, "Please provide a Post Title"]
    },
    slug: {
        type: String,
        required: [true, "Please provide a Post Slug"],
        unique: true,
    },
    description: {
        type: String,
        required: [true, "Please provide a Post Description"],
    },
    thumbnial: {
        type: String,
        default: ""
    },
    tags: {
        type: [String],
        required: [true, "Please provide Tags"],
    },
    published: {
        type: Boolean,
        default: false,
    },
    date: {
        type: Date,
        default: Date.now,
    },
})

const Post = mongoose.models.posts || mongoose.model("posts", postSchema);

export default Post;