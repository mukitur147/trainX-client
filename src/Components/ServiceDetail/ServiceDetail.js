import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetail = () => {
    const {servicedetailId}= useParams()
    const [serviceDetails,setServiceDetails]=useState([])
    useEffect(()=>{
        fetch('/services.json')
        .then(res=>res.json())
        .then(data=>setServiceDetails(data))
    },[])
    useEffect(()=>{
     const foundService =  serviceDetails.find(services=>services.id === servicedetailId)
     console.log(foundService)
       
    },[serviceDetails])
    
    return (
        <div>
              <h1>Details {servicedetailId} </h1>
              
        </div>
    );
};

export default ServiceDetail;