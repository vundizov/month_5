import {useState,useEffect} from "react";

const MainPage = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/posts')
            .then((response) => response.json())
            .then((json) => setPosts(json.posts))
    }, [])

    return (
        <div>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
};

export default MainPage;