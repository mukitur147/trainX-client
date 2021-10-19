import React from 'react';
import './Trainers.css'
import trainer1 from '../../../Images/trainer1.jpg'
import trainer2 from '../../../Images/trainer2.jpg'
import trainer3 from '../../../Images/trainer3.jpg'
import trainer4 from '../../../Images/trainer4.jpg'
import trainer5 from '../../../Images/trainer5.jpg'
import trainer6 from '../../../Images/trainer6.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'


const Trainers = () => {
    const star = <FontAwesomeIcon icon={faStar} />
    return (
        <div className="container">
              <div >
                <h6 className=" mt-4 ">All of Our Trainers</h6>
                     <h4 className="mb-4"> Professional and Experienced Team </h4>
                </div>
                <div>
                <div className="row row-cols-1 row-cols-md-2 g-4 mb-5">
  <div className="col ">
    <div className="card h-100 border-0 shadow-lg">
      <img src={trainer1} className="card-img-top custom-trainer" alt="..."/>
      <div className="card-body">
        <h5 className="card-title"><b>Reed M. Lawson</b></h5>
        <p className="card-text text-danger">Lead Trainer</p>
        <p>Age : 32 </p>
        <p>Ratings : <span className="text-warning">{star}{star}{star}{star}{star}</span> </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100  border-0 shadow-lg">
      <img src={trainer2} className="card-img-top custom-trainer" alt="..."/>
      <div className="card-body">
        <h5 className="card-title"><b>David M. Hanks</b></h5>
        <p className="card-text text-danger">Lead Trainer</p>
        <p>Age : 27</p>
        <p>Ratings : <span className="text-warning">{star}{star}{star}{star}{star}</span> </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100  border-0 shadow-lg">
      <img src={trainer3} className="card-img-top custom-trainer " alt="..."/>
      <div className="card-body">
        <h5 className="card-title"><b>Gerald D. Payne</b></h5>
        <p className="card-text text-danger">Assistant Trainer</p>
        <p>Age : 25 </p>
        <p>Ratings : <span className="text-warning">{star}{star}{star}{star}{star}</span> </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100  border-0 shadow-lg">
      <img src={trainer4} className="card-img-top custom-trainer" alt="..."/>
      <div className="card-body">
        <h5 className="card-title"><b>Scott J. Sills</b></h5>
        <p className="card-text text-danger">Assistant Trainer</p>
        <p>Age : 31 </p>
        <p>Ratings : <span className="text-warning">{star}{star}{star}{star}{star}</span> </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100  border-0 shadow-lg">
      <img src={trainer5} className="card-img-top custom-trainer" alt="..."/>
      <div className="card-body">
        <h5 className="card-title"><b>Anthony T. Colson</b></h5>
        <p className="card-text text-danger">Assistant Trainer</p>
        <p>Age : 29 </p>
        <p>Ratings : <span className="text-warning">{star}{star}{star}{star}{star}</span>  </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100  border-0 shadow-lg">
      <img src={trainer6} className="card-img-top custom-trainer" alt="..."/>
      <div className="card-body">
        <h5 className="card-title"><b>Andrew Carlos</b></h5>
        <p className="card-text text-danger">Assistant Trainer</p>
        <p>Age : 34 </p>
        <p>Ratings : <span className="text-warning">{star}{star}{star}{star}{star}</span> </p>
      </div>
    </div>
  </div>
</div>
                </div>
        </div>
    );
};

export default Trainers;