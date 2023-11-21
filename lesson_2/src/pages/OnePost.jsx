import {useParams, useSearchParams} from "react-router-dom"
import {useEffect, useState} from "react";
import axios from "axios";

const OnePost = () => {
    const { id } = useParams()

    const [users, setUsers] = useState([])
    const [posts, setPosts]= useState([])
    const [todos, setTodos] = useState([])
    const [loadingPost, setLoadingPost] = useState(false)
    const [loadingTodo, setLoadingTodo] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams()

    const tab = searchParams.get('tab')

    useEffect(() => {
         axios.get(`https://dummyjson.com/users/${id}`)
             .then((resp)=> {
                 setUsers(resp.data)
             }).catch((err)=> {
             console.error(err)
         })

    }, [id])

    useEffect(()=> {
        if (tab === 'posts'){
            setLoadingPost(true)
            axios.get(`https://dummyjson.com/users/${id}/${tab}`)
                .then((resp)=> {
                    setPosts(resp.data.posts)
                    setLoadingPost(false)
                }).catch((err)=> {
                console.error(err)
            })
        } else {
            setPosts([])
        }
    }, [id, tab])

    useEffect(()=> {
        if (tab === 'todos'){
            setLoadingTodo(true)
            axios.get(`https://dummyjson.com/users/${id}/${tab}`)
                .then((resp)=> {
                    setTodos(resp.data.todos)
                    setLoadingTodo(false)
                }).catch((err)=> {
                console.error(err)
            })
        } else {
            setTodos([])
        }
    }, [id, tab])

    console.log(todos)
    return (
        <div>
            <div>
                Name:{users.firstName}
                <br/>
                Age:{users.age}
            </div>
            <button onClick={()=> setSearchParams({tab:'posts'})}>POSTS</button>
            <button onClick={()=> setSearchParams({tab:'todos'})}>TODOS</button>



            {tab === 'posts' && loadingPost && <h2>loading POST</h2>}
            {tab === 'todos' && loadingTodo && <h2>loading TODOS</h2>}


            {tab === 'posts' && posts.length > 0 && (
                <div>
                    {posts.map((post)=> (
                        <div key={post.id}>
                            {post.title}
                            {post.body}
                        </div>
                    ))}
                </div>
            )}
            {tab === 'todos' && todos.length > 0 && (
                <div>
                    {todos.map((todo)=> (
                        <div key={todo.id}>
                            {todo.todo}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
export default OnePost