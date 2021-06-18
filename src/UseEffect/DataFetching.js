import react, { useEffect, useState } from 'react'
import axios from 'axios'

function DataFetching(){

    const [post , setPost] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            console.log(res)
            setPost(res.data)
        })
        .catch((error)=>{
            console.log(error)
        })

    },[])

    return(
        <div>
            <ul>
                {post.map(post => <li key={post.id}>{post.title}</li>)}
            </ul>
        </div>
    )
}

export default DataFetching;