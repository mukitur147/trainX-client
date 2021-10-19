import React from 'react';
import { useHistory } from 'react-router';
import errorImage from '../../Images/error.jpg'

const NotFound = () => {
    const history= useHistory()
    const backToHome = ()=>{
        history.push('/home')
    }
    return (
        <div>
            <div className="container">
                <h1 className="text-danger my-5"><b>CONTENT NOT FOUND</b></h1>
                
                <img src={errorImage} alt="" /> <br />
                <button onClick={backToHome} className="custom-button my-5">Back to Homepage</button>
            </div>
        </div>
    );
};

export default NotFound;