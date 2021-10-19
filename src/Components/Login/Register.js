import React from 'react';
import { Form } from 'react-bootstrap';
import { Link,useHistory,useLocation } from 'react-router-dom';
import googleIcon from '../../Images/google.png'
import facebookIcon from '../../Images/facebook.png'
import useFirebase from '../../Hooks/useFirebase';
import './Login.css'
import useAuth from '../../Hooks/useAuth';

const Register = () => {
  const {handleGoogleSignIn} =useAuth()
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
            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control className="w-75 mx-auto" type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
    
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control className="w-75 mx-auto" type="password" placeholder="Password" />
  </Form.Group>
  <button className="custom-button">Register </button>
</Form>
<br />
<p><small>Already have an account? <Link to="/login">Log In</Link></small></p>


 <button
 onClick={signUpWithGoogle}
 className="btn"><img src={googleIcon} alt="" /></button>
 <button className="btn"><img src={facebookIcon} alt="" /></button>
        </div>
        </div>
    );
};

export default Register;