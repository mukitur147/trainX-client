
import {  Container, Row, } from 'react-bootstrap';
import  './HomePage.css'
import Service from './Service';
import choose from '../../../Images/choose.jpg'
import trainer from '../../../Images/trainer.jpg'
import man1 from '../../../Images/man1.jpg'
import man2 from '../../../Images/man2.jpg'
import man3 from '../../../Images/man3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';
import useServices from '../../../Hooks/useServices';



const HomePage = () => {
 
     const History = useHistory()
    const star = <FontAwesomeIcon icon={faStar} />

 const [services]=useServices()

  const servicesButton=()=>{
      History.push('/services')
  }
  const trainerButton=()=>{
      History.push('/trainers')
  }
  const contactUsButton=()=>{
      History.push('/contact')
  }

    return (
        <>
            {/* banner setion  */}

            <div className="banner">
               <h1 >TrainX </h1>
               <h2>Fitness Club</h2>
               
               <p className="mt-3">Everything you do Now is for your Future
               Think <br />about  That. Do something Today that<br /> your self will Thank you for.</p>
               <button
               onClick={servicesButton}
               className=" m-4 custom-button">Our Services</button>
               <button onClick={contactUsButton} className="custom-button">Contact Us</button>
            </div>

            {/* services section  */}

             <div className="services mb-5">


                 <Container>
                     <h6 className=" mt-4 ">Our services</h6>
                     <h4 className="mb-4">Build Your Body With Us </h4>

                     <Row xs={1} md={4} className="g-4">
                    {Array.from({ length: 1 }).map((_, idx) => (
                        services.slice(0, 8).map(services => <Service
                        key={services.id}
                        services={services}></Service> )
                    ))}
                </Row>
                <button
               onClick={servicesButton}
               className=" m-4 custom-button">All Services</button> 
                 </Container>
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
                 <img className="img-fluid" src={choose} alt="" />
             </div>
            </div>
        </Container>
        <Container>
            <div className="choose-section mb-5">
             <div>
                <img className="img-fluid" src={trainer} alt="" />
             </div>
             <div className="choose-detail">
                <h6>Trainers</h6>
                <h4>Professional Trainers</h4>
                <p> <b>Our trainers typically do the following:</b> </p>
                <ul >
                     <li>Demonstrate how to carry out various exercises and routines</li>
                     <li>Monitor client's progress and adapt programs as needed</li>
                     <li>Watch clients do exercises and show or tell them correct techniques to minimize injury and improve fitness</li>
                     <li>Give alternative exercises during workouts or classes for different levels of fitness and skill</li>
                     
                 </ul>
               
                <button
                onClick={trainerButton}
                className="custom-button">Choose Your Trainer</button>
                
             </div>
            </div>
        </Container>

        <Container>
           <div className="mb-5">
           <h6>Become A Part Of Us</h6>
            <h4>Our Membership</h4>
           </div>
           <div className="join-us">
               <div className="join-us-card mb-5">
                      <h5> <b>Beginner Plan</b> </h5>
                      <h1>$40</h1>
                      <h6>For Rookies</h6>
                      <br />
                      <button className="custom-button">Select Plan</button>
                      <br />
                      <br />
                      <ul className="left-align" >
                          <li>Unlimited access to the gym</li>
                          <li>3 classes per week</li>
                          <li>One Year memberships</li>
                          <li>FREE drinking package</li>
                          <li>1 Free personal training</li>
                      </ul>
               </div>
               <div className="join-us-card mb-5">
                      <h5><b>Premium Plan</b></h5>
                      <h1>$60</h1>
                      <h6>For Fitness Lover</h6>
                      <br />
                      <button className="custom-button">Select Plan</button>
                      <br />
                      <br />
                      <ul className="left-align">
                          <li>Unlimited access to the gym</li>
                          <li>5 classes per week</li>
                          <li>One Year memberships</li>
                          <li>FREE drinking package</li>
                          <li>2 Free personal training</li>
                      </ul>
               </div>
               <div className="join-us-card mb-5">
                      <h5> <b>Ultimate Plan</b></h5>
                      <h1>$80</h1>
                      <h6>For The Addicted</h6>
                      <br />
                      <button className="custom-button">Select Plan</button>
                      <br />
                      <br />
                      <ul className="left-align" >
                          <li>Unlimited access to the gym</li>
                          <li>7 classes per week</li>
                          <li>One Year memberships</li>
                          <li>FREE drinking package</li>
                          <li>7 Free personal training</li>
                      </ul>
               </div>
              
           </div>
        </Container>
        <Container>
            <h6>Testimonials</h6>
            <h4>What Our Member Says</h4>
            <p>There are some reviews from our members. See their experinces down below.</p>
            <div className="testimonials mb-5">
              <div className="reviews">
                  <p className="text-warning">{star}{star}{star}{star}{star}</p>
                  <p>Great Gym. All Trainers are Professional. They help me a lot. Very Clean and minimal Gym.</p>
                  <img className="reviewers-img img-fluid" src={man1} alt="" />
                  <p className="text-danger">-Mark Otto</p>
              </div>
              <div  className="reviews">
              <p className="text-warning">{star}{star}{star}{star}{star}</p>
                  <p>Awesome Service !! I am greatfull to them . For a healthy life you should must join Gym to do exercises.</p>
                  <img className="reviewers-img img-fluid" src={man2} alt="" />
                  <p className="text-danger">-Steve Johnson</p>
              </div>
              <div  className="reviews">
              <p className="text-warning">{star}{star}{star}{star}{star}</p>
                  <p>I Like my Trainer. I like the look of Studio. I like the people who use it. ITS A VERY CLEAN, LOW KEY GYM.</p>
                  <img className="reviewers-img img-fluid" src={man3} alt="" />
                  <p className="text-danger">-Selena Gomez</p>
                 
              </div>
            </div>
        </Container>
        </>
    );
};

export default HomePage;