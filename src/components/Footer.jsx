import './Navbar.css';
import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { MdOutlineWhatsapp } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";





function Footer() {
    return (
        <footer className="text-center text-lg-start">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mt-3">
                      <div className="card-icon">
                      <Link to="https://facebook.com"><i><FaFacebookSquare /></i></Link>
                        <Link to="https://wa.me/201090409021" target="_blank" rel="noopener noreferrer"><i><MdOutlineWhatsapp /></i></Link>
                        <Link to="https://twitter.com"><i><FaTwitter /></i></Link>
                        <Link to="https://instagram.com"><i><IoLogoInstagram /></i></Link>
                        </div>  
                    </div>
                    <div className="col-lg-4 mt-3">
                        <p className='text-warning'>Experience the taste of success with our signature dishes! Order now via WhatsApp
                        <Link to="https://wa.me/201090409021" target="_blank" rel="noopener noreferrer" 
                        style={{fontSize:"xx-large",color:"#fff",margin:"8px"}}><i><MdOutlineWhatsapp /></i></Link></p>
                    </div>
                    <div className="col-lg-4 mt-3">
                        <p className='text-white'>We combine luxury and tranquility...</p>
                        <p className='text-white'> your favorite place for the family...</p>
                    </div>
                </div>
              <div className="text-center p-3 mb-3">© 2024 Foodera. All rights reserved...
                 <Link style={{fontSize:"large",color:"#fff",margin:"8px"}} to="https://wa.me/201090409021" target="_blank" rel="noopener noreferrer">Amany Mohamed</Link>
              </div>
            </div>
        </footer>
    );
}
export default Footer;