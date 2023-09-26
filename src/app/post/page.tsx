"use client";
import { useState, FormEvent} from "react";
import axios from "axios";
import CreatePost from "../components/CreatePost";

export default function PostPage() {
    const [post, setPost] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tags, settags] = useState("");
    const [publish, setPublish] = useState(false);
    const [slug, setSlug] = useState("");
    const [thumbnial, setThumbnial] = useState("");

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setTitle(title=>title.trim());
        setDescription(description=>description.trim());
        setPost(post=>post.trim());
        settags(tags=>tags.trim());
        setSlug(slug=>slug.trim());
        setThumbnial(thumbnial=>thumbnial.trim());

        if(!post || !tags || !slug || !title || !description){
            alert("Please fill all the fields");
            return;
        }
        axios.post("/api/post/createPost", {
            title,
            description,
            post,
            tags: tags.split(",").map(tag => tag.trim()),
            published: publish,
            slug,
            thumbnial
        }).then(res => {
            console.log(res);
        }
        ).catch(err => {
            console.log(err);
        }
        )
        setTitle("");
        setDescription("");
        setPost("");
        settags("");
        setPublish(true);
        setSlug("");
        setThumbnial("");
    }
    return (
        <CreatePost params={{ post, setPost, title, setTitle, description, setDescription, tags, settags, publish, setPublish, slug, setSlug, thumbnial, setThumbnial, handleSubmit }} />
    );
}