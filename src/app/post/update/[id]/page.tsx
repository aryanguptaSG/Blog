"use client"
import { useState, FormEvent, useEffect} from "react";
import axios from "axios";
import CreatePost from "@/app/components/CreatePost";
import { notFound } from "next/navigation";
import { useRouter } from "next/navigation";

type Props = {
    params: {
        id: string
    }
}

export default function PostUpdate({ params: { id } }: Props) {
    const router = useRouter();
    
    const [post, setPost] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tags, settags] = useState("");
    const [publish, setPublish] = useState(true);
    const [slug, setSlug] = useState("");
    const [thumbnial, setThumbnial] = useState("");
    const [postRes, setPostRes] = useState({_id:""});


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
        axios.post("/api/post/updatePost", {
            id:postRes._id,
            title,
            description,
            post,
            tags: tags.split(",").map(tag => tag.trim()),
            published: publish,
            slug,
            thumbnial
        }).then(res => {
            router.push(`/post/${slug}`);
        }
        ).catch(err => {
            console.log(err);
            alert("Something went wrong");
        }
        )
    }

    useEffect(() => {
        axios.post(`/api/post/getPostBySlug`, {slug : id}).then(postResp => {
            const data = postResp.data.posts;
            if(data.length == 0) notFound();
    
            setPostRes(data[0]);
            setTitle(data[0].title);
            setDescription(data[0].description);
            setPost(data[0].post);
            settags(data[0].tags.join(","));
            setPublish(data[0].published);
            setSlug(data[0].slug);
            setThumbnial(data[0].thumbnial);
    
        }).catch(err => {
            console.log("This is Error : ",err);
        })
    }, [])




    return (
        <CreatePost params={{ post, setPost, title, setTitle, description, setDescription, tags, settags, publish, setPublish, slug, setSlug, thumbnial, setThumbnial, handleSubmit, pageTitle: "Update Post", buttonText:"Update" }} />
    );
}