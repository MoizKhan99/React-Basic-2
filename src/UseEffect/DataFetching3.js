import react, { useEffect, useState } from 'react'
import axios from 'axios'

function DataFetching3(){

    const [post , setPost] = useState({})
    const [id , setId] = useState(1)
    const [buttonId , setButtonId] = useState(1)

    const Fetching = () =>{
        setButtonId(id)
    }

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res)=>{
            console.log(res)
            setPost(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[buttonId])


    return(
        <div>
            <input type="text" value={id} onChange={(e)=> setId(e.target.value)}/>
            <button type="button" onClick={Fetching} >Fetch Data</button>
            <div>{post.title}</div>
        </div>
    )
}

export default DataFetching3