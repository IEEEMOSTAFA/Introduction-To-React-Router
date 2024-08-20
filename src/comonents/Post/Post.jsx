import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Add this import
import './post.css'
const Post = ({ post }) => {
    const { id, title, body } = post;
    const navigate = useNavigate();
    const postStyle = {
        border: '2px solid red',
        padding: '5px',
        borderRadius: '20px'
    };
    const handleShowDetail = () =>{
        navigate(`/post/${id}`);
  
    }
    return (
        <div style={postStyle}>
            <h4>Post of Id: {id}</h4>
            <p>{title}</p>
            <small>{body}</small><br />
            
            <Link to={`/post/${id}`}><button className="green-button">Show Details</button></Link>
            <button onClick={handleShowDetail}>Click to see details</button>
        </div>
    );
};

export default Post;
