import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell, faLocationArrow, faMailBulk, faPhone,} from '@fortawesome/free-solid-svg-icons'
import './Footer.css'

const Footer = () => {
    const dumbell = <FontAwesomeIcon icon={faDumbbell} />
    const locate = <FontAwesomeIcon icon={faLocationArrow} />
    const mail = <FontAwesomeIcon icon={faMailBulk} />
    const cell = <FontAwesomeIcon icon={faPhone} />
    return (
        <>
           <div className="main-footer">
           <div className="footer container">
                <div className="left-align">
                    <h4> <span>{dumbell}</span> TrainX</h4>
                    <p> <span>{locate}</span> Dhaka,Bangladsh</p>
                    <p> <span>{mail}</span> trainx@gmail.com</p>
                    <p> <span>{cell} </span>(+11)9331 3949</p>
                </div>
                <div className="left-align">
                    <h5> <b><span>Company</span></b></h5>
                    <p>About Us</p>
                    <p>Services</p>
                    <p>Trainers</p>
                    <p>Blogs</p>
                </div>
                <div className="left-align">
                    <h5><b><span>Information</span></b></h5>
                    <p>Sitemap</p>
                    <p>Documentation</p>
                    <p>Cookies</p>
                </div>
                <div className="left-align">
                    <input type="text"  placeholder="Email Adress"/> <br /> <br />
                    <button className="custom-button">Subscribe</button>
                </div>
            </div>
            <p className="py-3"><small>TrainX template by - Mukitur Rahman Tilok</small></p>
           </div>
        </>
    );
};

export default Footer;