
import { Card, Col, Container, Row } from 'react-bootstrap';
import useServices from '../../../Hooks/useServices';

const AllServices = () => {
   const[services]=useServices()
   
    return (
        <div>
             <Container>
                <div>
                <h6 className=" mt-4 ">All of Our services</h6>
                     <h4 className="mb-4">Build Your Body With Us </h4>
                </div>

                {/* card map  */}
                <Row xs={1} md={3} className="g-4 mb-5">
                    {Array.from({ length: 1 }).map((_, idx) => (

                        services.map(services => <Col>
                            <Card className="services-card">
                                <Card.Img variant="top" src={services.img} />
                                <Card.Body >
                                     <h5>{services.Genre}</h5>
                                    <h4>{services.name}</h4>
                                    <p> {services.details}</p>
                                   
                                    <button className="custom-button">more info  </button>
                                </Card.Body>
                            </Card>
                        </Col>)
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default AllServices;