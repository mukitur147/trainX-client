import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import img1 from '../../Images/blog3.jpg'
import './ServiceDetail.css'

const ServiceDetail = () => {
    const history = useHistory()
    let {servicedetailId}= useParams()
    console.log(servicedetailId)
    const [serviceDetails,setServiceDetails]=useState([])
    const [singleService,setSingleService]=useState({})

    const handleServicesPage=()=>{
        history.push('/services')
    } 
    
    useEffect(()=>{
        fetch('/serviceDetails.json')
        .then(res=>res.json())
        .then(data=>setServiceDetails(data.service))
    },[])
    useEffect(()=>{
        const foundService = serviceDetails.find(service=>service.login?.id == servicedetailId)
        setSingleService(foundService)
    },[serviceDetails])
    return (
        <div>
              <h3 className="text-danger mt-4"> <b>Service Details</b> </h3>
             

              <div className=" service-container container my-5">
                  <div className="service-text">
                      <h5><b>{singleService?.Genre}</b></h5>
                      <h2><b>{singleService?.name}</b></h2>
                      <p>{singleService?.moreDetails}</p>
                      <p>Service Fee : <span className="price"> $ {singleService?.fee} </span></p>
                      <br />
                      <button className="custom-button me-4">Book Service</button> 
                      <button onClick={handleServicesPage} className="custom-button">Back to services</button>
                  </div>
                  <div>
                   <img className="img-fluid rounded-3" src={singleService?.img} alt="" />
                  </div>
              </div>
              
        </div>
    );
};

export default ServiceDetail;