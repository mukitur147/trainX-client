
import { Container, Row } from 'react-bootstrap';
import useServices from '../../../Hooks/useServices';
import Service from '../Homepage/Service';

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

                        services.map(services => <Service
                            key={services.id}
                            services={services}
                        ></Service>)
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default AllServices;