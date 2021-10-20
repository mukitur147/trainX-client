import React from 'react';
import './Blogs.css'
import blog1 from '../../../Images/blog1.jpg'
import blog2 from '../../../Images/blog2.jpg'
import blog3 from '../../../Images/blog3.jpg'
import blog4 from '../../../Images/blog4.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'


const Blogs = () => {
    const arrow  = <FontAwesomeIcon icon={faArrowRight} />
    return (
        <div>
           <h1 className="text-danger my-5"><b>Our Blogs</b></h1> 
           <div className="container blogs">
            <div>
              <div className="mb-5">
                  <img className="img-fluid blog-img" src={blog1} alt="" />
                  <h3  className="mt-3" > <b>Fitness Tune-up: How to Overcome <br /> Your Fitness Plateau</b></h3>
                  <p className="blog-details" >If you have been a consistent exerciser for many years, you may have hit the proverbial fitness roadblock at some point in your training. Hitting a fitness plateau can be frustrating, but it is common and completely normal. Read on to learn more about what may be causing your fitness rut and how to overcome it.</p>
              </div>
              <div className="mb-5">
                  <img className="img-fluid blog-img" src={blog2} alt="" />
                  <h3 className="mt-3"  > <b>NEAT Ways to Burn More Calories</b></h3>
                  <p className="blog-details" >In 2020 the world came to a halt and people stayed inside their homes to help stop the spread of COVID-19. Many jobs shifted to work-from-home and schools around the world transitioned to virtual learning.  Gyms, parks and outdoor recreation areas also closed for a number of months limiting the ability to experience exercise outside of the home. As a result, we sat, a lot. Up to four more hours per day than before COVID-19 shutdowns.</p>
              </div>
              <div className="mb-5">
                  <img className="img-fluid blog-img" src={blog3} alt="" />
                  <h3 className="mt-3"  > <b>The 10 Best Exercises for Men</b></h3>
                  <p className="blog-details" >Bench press. Lat pulldown. Biceps curls. Ab crunches. Leg press. For many men, these are their go-to choices for strength-training workouts. While these exercises can certainly help increase strength or improve definition, each one focuses on just one body part or muscle group at a time, which isn’t actually the way muscles are designed to function. </p>
              </div>
              <div className="mb-5">
                  <img className="img-fluid blog-img" src={blog4} alt="" />
                  <h3 className="mt-3" > <b>Change Your Breathing, Change Your Life</b></h3>
                  <p  className="blog-details">Have you ever thought about your breathing? Most people don’t. Breathing is an automatic function of the body, but you can also control it. You must breathe to live and so your body will do everything it can to make that happen. But your environment, stress and how you breathe can alter and even impede that process. </p>
              </div>
            </div>
            <div >
                <input type="text" placeholder="search" />
                <div className="my-4">
                    <h6>Recent Post</h6>                    
                        <p>{arrow} Fitness Tune-up</p>
                        <p>{arrow} Change Your Life</p>
                        <p>{arrow} Burn More Calorie</p>
                        <p>{arrow} Exercises for Men</p>  
                </div>
                <div className="my-4">
                    <h6>Categories</h6>
                    <p>{arrow} Cardio</p>
                    <p>{arrow} Cycling</p>
                    
                </div>
                <div className="my-4">
                    <h6>Opening Hours</h6>
                        <div>
                         <p>satarday (07:00-17:00)</p>
                         <p>Sunday (07:00-17:00) </p>
                         <p>Monday (07:00-17:00)</p>
                         <p>Tuesday (07:00-17:00) </p>
                         <p>Thursday (07:00-17:00)</p>
                         <p>Friday (07:00-17:00) </p>
                         
                        </div>
                </div>

            
            </div>
           </div>
        </div>
    );
};

export default Blogs;