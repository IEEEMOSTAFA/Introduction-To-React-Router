import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const user = useLoaderData();
    const {id,name,email,website} = user;
    return (
        <div>
            <h2>Details About User: {name}</h2>
            <h4>Website: {website}</h4>
            <p>Email: {email}</p>
            <p>Id: {id}</p>
        </div>
    );
};

export default UserDetails;