// import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    const {id,title,body} = post;
    return (
        <div>
            <h3>Post Details About: {id} </h3>
            <p>Title: {title}</p>
            <p><small>{body}</small></p>
            {/* <Link to={`/user/${id}`}>Show Details</Link> */}
        </div>
    );
};

export default PostDetails;