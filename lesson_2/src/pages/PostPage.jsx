// import React from 'react';

import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const PostPage = () => {
    const navigate = useNavigate()
    const createPost = ()=> {
        axios.post('https://dummyjson.com/posts/add',{
            title: data ,
            userId: 1
        }) .then(() => {
            navigate('/')
            console.log('post win')
        }).catch((err)=>{
            console.error(err)
        })

    }
    const [data, setData] = useState('')
    return (
        <div>
            <input type="text" value={data} onChange={e=> setData(e.target.value)}/>
            <button onClick={createPost}>click</button>
        </div>
    );
};

export default PostPage;