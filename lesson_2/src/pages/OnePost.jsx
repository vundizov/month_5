import {useParams, useNavigate, Link} from "react-router-dom"

const OnePost = () => {
    const { id } = useParams()
    const navigate = useNavigate()



    return (
        <div>
            <p>текст из API</p>
            <Link to={`/posts/${id}/delete`}>delete</Link>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    )
}
export default OnePost