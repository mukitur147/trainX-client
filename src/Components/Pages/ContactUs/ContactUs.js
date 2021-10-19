import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import './ContactUS.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLocationArrow, faMailBulk, faPhone,} from '@fortawesome/free-solid-svg-icons'
import contact from '../../../Images/contact.jpg'


const ContactUs = () => {
    
    const locate = <FontAwesomeIcon icon={faLocationArrow} />
    const mail = <FontAwesomeIcon icon={faMailBulk} />
    const cell = <FontAwesomeIcon icon={faPhone} />
    return (
        <div>
            <div className=" container contact-us my-5">
              <div>
                  <h6>Contact Us</h6>
                  <h4 className="mb-4">Get In Touch With Us</h4>
                  
                    <p> <span>{locate}</span> Dhaka,Bangladsh</p>
                    <p> <span>{mail}</span> trainx@gmail.com</p>
                    <p> <span>{cell} </span>(+11)9331 3949</p>
              </div>
              <div>
              <Form>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>

 <button className="custom-button">Submit</button>
</Form>
              </div>
            </div>

            <Container>
            <div className="choose-section mb-5">
             <div className="choose-detail">
                 <h6>Benefits</h6>
                 <h4>Why Choose us</h4>
                 <p>Research shows that physical activity can also boost self-esteem, mood, sleep quality and energy, as well as reducing your risk of stress, clinical depression, dementia and Alzheimer's disease.</p>
                 <ul >
                     <li>Exercise combats health conditions and diseases.</li>
                     <li>Exercise boosts energy.</li>
                     <li>Exercise improves mood.</li>
                     <li>Exercise promotes better sleep.</li>
                 </ul>
             </div>
             <div>
                 <img className="img-fluid" src={contact} alt="" />
             </div>
            </div>
        </Container>
        </div>
    );
};

export default ContactUs;