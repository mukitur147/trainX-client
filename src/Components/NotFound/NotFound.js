import React from 'react';
import { Link } from 'react-router-dom';
import errorImage from '../../Images/error.jpg'

const NotFound = () => {
    return (
        <div>
            <div className="container">
                <h1 className="text-danger my-5"><b>CONTENT NOT FOUND</b></h1>
                
                <img src={errorImage} alt="" /> <br />
                <Link path="/home"><button className="custom-button my-5">Back to Homepage</button></Link>
            </div>
        </div>
    );
};

export default NotFound;