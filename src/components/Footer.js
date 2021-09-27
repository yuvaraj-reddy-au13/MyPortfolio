import React from "react";
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    RedditShareButton,
    WhatsappShareButton,
    WhatsappIcon,
    LinkedinShareButton,
    LinkedinIcon,
} from "react-share";

import { MdLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { BiPhone } from "react-icons/bi";

import instagram from '../images/socialicons/instagram.png'
import github from '../images/socialicons/github.png'
import whatsapp from '../images/socialicons/whatsapp.png'
import linkedin from '../images/socialicons/linkedin.png'

import { SocialMediaIconsReact } from "social-media-icons-react";
import { Link } from 'react-scroll';
import { Nav  } from 'react-bootstrap';

import { Button } from "react-bootstrap";
var Scroll = require('react-scroll');
// let Link = Scroll.Link



const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>
                                {" "}
                                <MdLocationOn /> #24, BTM LAYOUT 1st Stage,
                                BENGALURU
                            </p>
                        </div>
                        <div className="d-flex">
                            <a href="tel:6362923327">
                                {" "}
                                <BiPhone /> +91 6362923327
                            </a>
                        </div>
                        <div className="d-flex">
                            <p className="email-footer">
                                {" "}
                                <MdEmail /> yuvarajreddym@gmail.com
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a className="footer-nav" > <Link to='home'> Home </Link></a>
                                <br />
                                <a className="footer-nav"><Link to='aboutme'> About me </Link></a>
                                <br />
                                <a className="footer-nav"> <Link to='services'> Services </Link></a>
                                
                                {/* <a>
                                    <Link to='home'>Home</Link>
                                </a> */}

                        
                            </div>
                            <div className="col">
                                <a className="footer-nav"><Link to='experience'> Experience </Link></a>
                                <br />
                                <a className="footer-nav"> <Link to='portfolio'> Portfolio </Link></a>
                                <br />
                                <a className="footer-nav"> <Link to='contactme'> Contact me </Link></a>
                            </div>

                            {/* <Link to='home' ><Nav.Link className="footer-nav" href="#link" active='true' >  Home </Nav.Link></Link>
                            <Link to='aboutme' ><Nav.Link className="footer-nav" href="#link" active='true'>  About Me  </Nav.Link></Link>
                            <Link to='services' ><Nav.Link className="footer-nav" href="#link" active='true'>  services </Nav.Link></Link>
                            <Link to='portfolio' ><Nav.Link className="footer-nav" href="#link" active='true'>  Portfolio </Nav.Link></Link>
                            <Link to='contactme' ><Nav.Link className="footer-nav" href="#link" active='true'> Contact Me   </Nav.Link></Link> */}

                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center social-icons">
                        <div className="d-flex justify-content-center">
                            
                            {/* <div > */}
                                <a href='https://www.instagram.com/yuvraj_dp/' target="_blank" rel="noreferrer" >
                                    <img src={instagram} alt="myInstagram" className="instaicon" />
                                </a>

                                <a href='https://github.com/yuvaraj-reddy-au13' target="_blank" rel="noreferrer" >
                                    <img src={github} alt="Mygithub" className="socialicon" />
                                </a>

                                <a href='https://wa.me/+916362923327' target="_blank" rel="noreferrer">
                                    <img src={whatsapp} alt="Mywhatsapp" className="instaicon" />
                                </a>

                                <a href='https://www.linkedin.com/in/yuvaraj-reddy-m-34773520b/' target="_blank" rel="noreferrer" >
                                    <img src={linkedin} alt="Mylinkedin" className="linkedinicon" />
                                </a>

                            {/* </div> */}
                            

                        </div>
                        <p className="pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp;Yuvaraj Reddy | All
                            Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
