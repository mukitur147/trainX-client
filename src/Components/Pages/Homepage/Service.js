import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Service.css'

const Service = (props) => {
    
     const {name,details,id,Genre,img} = props.services
 
    
    
    return (
        <div>
            <Col>
                <Card className="services-card">
                    <Card.Img variant="top" src={img} />
                    <Card.Body >
                         <h5>{Genre}</h5>
                        <h4>{name} </h4>
                        <p> {details}</p>
                       <Link to={`service/${id}`}><button className="custom-button">more details</button></Link>
                    
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;