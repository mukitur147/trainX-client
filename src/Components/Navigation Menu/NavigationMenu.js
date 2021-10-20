import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavigationMenu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell,faSignOutAlt,faUser } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const NavigationMenu = () => {

  // get data from useauth 
  const{user ,logOut}=useAuth()

// font awesome icons 
    const dumbell = <FontAwesomeIcon icon={faDumbbell} />
    const profile = <FontAwesomeIcon icon={faUser} />
    const signOutIcon = <FontAwesomeIcon icon={faSignOutAlt} />

// register button handler 
    const history = useHistory()

    const handleLogin = ()=>{
      history.push('/register')
    }
    
    return (
        <div >

       {/* navigation bar     */}

<Navbar sticky="top"  className="navigatebar"  variant="dark" expand="lg">
  <Container>
    <Navbar.Brand href="/home"> 
        <h3> <span className="icons"> {dumbell}</span>  TrainX </h3>
        </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto menus">
      <Link to="/home">Home</Link>
      <Link to="/services">Services</Link>
      <Link to="/trainers">Trainers</Link>
      <Link to="/blogs">Blogs</Link>
      <Link to="/contact">Contact Us</Link> 
     
     {/* show users name when logged in and logout button */}
      {
        user.displayName ? <div className="d-flex">
          <p className="mx-2  user-name"><small>| {user.displayName}</small></p>
          
          <button
         onClick={logOut}
        className="ms-3 custom-button">{signOutIcon} Logout</button>
        </div> :
        <button
      onClick={handleLogin}
      className="ms-3 custom-button">{profile} Login / Register </button>
      }

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

        </div>
    );
};

export default NavigationMenu;