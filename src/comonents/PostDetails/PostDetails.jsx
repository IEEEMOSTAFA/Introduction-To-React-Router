// import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import './PostDetails.css';
const PostDetails = () => {
    const post = useLoaderData();
    const {userId} = useParams();
    const navigate = useNavigate();
    const {id,title,body} = post;
    console.log(userId);
    const handleGoBack = () =>{
           navigate(-1);
    }
    return (
        <div>
            <h3>Post Details About: {id} </h3>
            <p>Title: {title}</p>
            <p><small>{body}</small></p>
            {/* <Link to={`/user/${id}`}>Show Details</Link> */}
            <button className='post_details' onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default PostDetails;