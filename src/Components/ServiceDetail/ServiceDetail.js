import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetail = () => {
    const {serviceId}= useParams()
    
    return (
        <div>
              <h1>Details {serviceId} </h1>
              
        </div>
    );
};

export default ServiceDetail;