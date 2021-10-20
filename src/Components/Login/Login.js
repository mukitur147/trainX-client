import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import googleIcon from '../../Images/google.png'
import facebookIcon from '../../Images/facebook.png'
import { Link ,useHistory,useLocation } from 'react-router-dom';
import './Login.css'
import useAuth from '../../Hooks/useAuth';




const Login = () => {

  const {handleGoogleSignIn,handleEmailChange,handlePasswordChange,handleLogin,error,handleResetPassword} =useAuth()

  // redirect 

  const location = useLocation();
  const history = useHistory()
  const redirect_url = location.state?.from || '/home';


  const signUpWithGoogle =()=>{
    handleGoogleSignIn()
    .then(result=>{
      history.push(redirect_url)
    })
  }
  

    return (
        <div>
            
            <div className="container full-form my-5 shadow-lg p-5 rounded-3">
            <h2 className="text-primary mb-5" ><b>Login</b></h2>

            {/* email and password login  */}

            <Form onSubmit={handleLogin}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control onBlur={handleEmailChange} className="w-75 mx-auto" type="email" placeholder="Enter email" required />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control onBlur={handlePasswordChange} className="w-75 mx-auto" type="password" placeholder="Password" required />
  </Form.Group>
  <p><small className="text-danger">{error}</small></p>
  <button type="submit" className="custom-button me-4">Login </button>
  <button onClick={handleResetPassword} className="custom-button ">Reset Password </button>
</Form>
<br />

<p><small>Create new account . <Link to="/register">Register now</Link></small></p>


{/* google login  */}
 <button
 onClick={signUpWithGoogle}
 className="btn"><img src={googleIcon} alt="" /></button>

 {/* facebook login  */}

 <button className="btn"><img src={facebookIcon} alt="" /></button>
 </div>
</div>
    );
};

export default Login;