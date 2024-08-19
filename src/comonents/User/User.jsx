import React from 'react';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {id,name,phone,email} = user;
    const userStyle = {
        border: '2px solid yellow',
        padding: '5px',
        borderRadius: '20px'
        
        
        
    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>phone: {phone}</p>
            <p>email: {email}</p>
            {/* <Link to={`/user/&{id}`}>Show Details</Link> */}
            <Link to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;