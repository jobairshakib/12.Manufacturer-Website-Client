import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css'

const Footer = () => {
    const date = new Date();
    return (
        <footer className=' footer mt-5'>
            <h2 className='footer-title pt-3'>Mobile Point</h2>
            <div className="row w-100  mx-0  text-white px-5">
                <div className="col-md-3 footer">
                    <h6 className="mb-3">About us</h6>
                    <p>
                        Mobile gadgets in Mobile Point can be found by brands, price range and so on.
                    </p>
                </div>
                <div className="col-md-3 footer">
                    <h6 className="mb-3">QuickLinks</h6>

                    <h6>Homepages</h6>
                    <h6>About</h6>
                    <h6>News</h6>
                    <h6>Contact</h6>

                </div>
                <div className="col-md-3 footer">
                    <h6 className="mb-3">Press</h6>
                    <h6>Press Release</h6>
                    <h6>Contact Us</h6>
                </div>
                <div className="col-md-3 footer">
                    <h6 className="mb-4"> <FontAwesomeIcon className="text-light" icon={faLocationDot} /> Address</h6>
                    <h6> <FontAwesomeIcon className="text-light" icon={faPhone} /> +1 333 444 555</h6>
                    <h6> <FontAwesomeIcon className="text-light" icon={faEnvelope} /> mobilepoint@gmail.com</h6>
                </div>
                <p className="copyright text-center">
                    <small>Copyright {date.getFullYear()} © Mobile Point</small>
                </p>
            </div>

            
            
            
            
            
            
            
            
            
            
            
            
            
            {/* <p>Mobile Point</p>
            <p><small>
                ©{date.getFullYear()} Mobile Point. All Rights Reserved.
            </small></p> */}
        </footer>
    );
};

export default Footer;