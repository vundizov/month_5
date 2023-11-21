import {useState,useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";


const MainPage = () => {
    const [posts, setPosts] = useState([])
     useEffect(() => {
        const getPost = async ()=> {
            const resp = await axios.get('https://dummyjson.com/users')
            setPosts(resp.data.users)
            console.log(resp.data.users)
        }
        getPost()
    }, [])


    return (
        <div>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <p>
                            <Link to={`/posts/${post.id}`}>User:     {post.username}</Link>
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default MainPage;