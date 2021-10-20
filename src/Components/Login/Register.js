import React from 'react';
import { Form } from 'react-bootstrap';
import { Link,useHistory,useLocation } from 'react-router-dom';
import googleIcon from '../../Images/google.png'
import facebookIcon from '../../Images/facebook.png'
import './Login.css'
import useAuth from '../../Hooks/useAuth';



const Register = () => {
  
  const {handleGoogleSignIn,handleEmailChange,handlePasswordChange,handleRegistration,error,handleNameChange} =useAuth()

  // redirect 
  const location = useLocation();
  const history = useHistory()
  const redirect_url = location?.state?.from || '/home';


  const signUpWithGoogle =()=>{
    handleGoogleSignIn()
    .then(result=>{
      history.push(redirect_url)
    })
  }

  

    return (
        <div>
            
            <div className="full-form container  my-5 shadow-lg p-5 rounded-3">
            <h2 className="text-primary mb-5" ><b>Register Now</b></h2>

            {/* email and password registration  */}

            <Form onSubmit={handleRegistration}>
   <Form.Control onBlur={handleNameChange} className="mb-3" placeholder="Your name" required />
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control onBlur={handleEmailChange} className=" mx-auto" type="email" placeholder="Enter email" required/>
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control onBlur={handlePasswordChange} className="mx-auto" type="password" placeholder="Password" required />
  </Form.Group>
  <p className="text-danger my-3"><small>{error}</small> </p>
  <button className="custom-button"  type="submit">Register </button>
</Form>
<br />
<p><small>Already have an account? <Link to="/login">Log In</Link></small></p>

{/* google registration  */}
 <button
 onClick={signUpWithGoogle}
 className="btn"><img src={googleIcon} alt="" /></button>

 {/* facebook registration  */}
 <button className="btn" ><img src={facebookIcon} alt="" /></button>
        </div>
        </div>
    );
};

export default Register;