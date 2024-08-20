import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import './ErrorPage.css'
const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h2>opps!!!!!!!!!!</h2>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h3>Page not found</h3>
                    <p>Go Back Where You From</p>
                    <Link to="/"><button className='yellow-button'>Home</button></Link>
                    
                </div>
            }
        </div>
    );
};

export default ErrorPage;