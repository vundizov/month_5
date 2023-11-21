import {useState,useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";


const MainPage = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const getPost = async ()=> {
            const resp = await axios.get('https://dummyjson.com/posts')
            setPosts(resp.data.posts)
        }
        getPost()
    }, [])


    return (
        <div>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <p>
                            <Link to={`/posts/${post.id}`}>{post.title}</Link>
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default MainPage;