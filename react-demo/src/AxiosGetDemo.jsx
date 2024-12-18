import { useEffect, useState } from "react"
import axios from 'axios'
import Post from "./Post";

export default function(){

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/posts")
        .then(res => {
            console.log(res.data)
            setPosts(res.data)
        })
    }, [])



    return (
        <>
       <h3>Axios Get Demo</h3>
       {
        posts.map(post => {
            return (
                <Post post={post} />
            )
        })
       }
       </>
    )
}