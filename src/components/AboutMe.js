import React from "react";
// import yuvaraj from "../images/yuvaraj.jpg";
import Profile from "../images/profile.png";

import { Bounce } from 'react-reveal'
const AboutMe = () => {
    return (
        <div id="aboutme" className="aboutme-wrapper">
            <div className="container py-3 ">
                <div className="row">
                    <div className="col-lg-6 col-xm-12">
                        <div className="photo-wrap">
                            <Bounce left>
                            <img
                                className="profile-img mb-4"
                                src={Profile}
                                alt="Profile...."
                            />
                            </Bounce>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xm-12">
                        <Bounce right>
                        <h2 className="about-heading">About Me </h2>
                        <p className='aboutme-p'>
                            {" "}
                            I am Yuvraj, a MERN stack developer focused on
                            crafting great web experiences. Designing and Coding
                            have been my passion since the days I started
                            working with computers but I found myself into web
                            development. I have a wide range of skills that
                            include back-end development using open source
                            technologies NodeJs, front-end development ReactJs, HTML5, CSS3, Javascript,
                             database MongoDB.
                        </p>
                        </Bounce>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
