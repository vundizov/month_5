
import {useNavigate, useParams,} from "react-router-dom";
import axios from "axios";

const Delete = () => {
    const {id} = useParams()
     const navigate = useNavigate()
    const deletePost = ()=> {
         axios.delete(`https://dummyjson.com/posts/${id}`)
             .then(() =>{
                 console.log('post delete')
                 navigate('/')
             })
    }
    const goBack = ()=> {
         navigate(`/posts/${id}`)
    }
    return (
        <div>
            <p>вы хотите удалить пост?</p>
            <button onClick={goBack}>no</button>
            <button onClick={deletePost}>yes</button>
            <p>текст из API</p>
        </div>
    );
};

export default Delete;