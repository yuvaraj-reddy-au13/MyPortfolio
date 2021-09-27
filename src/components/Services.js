import React from "react";
import react from "../images/appicons/react.png";
import html from "../images/appicons/html.png";
import css from "../images/appicons/css.png";
import js from "../images/appicons/js.png";
import nodejs from "../images/appicons/nodejs.jpg";
import expressjs from "../images/appicons/expressjs.png";
import mongodb from "../images/appicons/mongodb.jpg";
import postgresql from "../images/appicons/postgresql.png";

import { Bounce } from 'react-reveal'

const Services = () => {
    return (
        <div id="services" className="services mt-2">
            <h2 className="myservices">My Services</h2>
            <div className="py-5 ">
                <div className="container ">
                    <div className="row ">
                        <Bounce left>
                        <div className="col-md-3 col-sm-6 ">
                            <div className="box">
                                <h2>Web development</h2>
                                <p>
                                    complete web technology by using all
                                    trending technologies. and the skills are as
                                    follows :{" "}
                                </p>
                            </div>
                        </div>
                        </Bounce>

                        <div className="col-md-3 col-sm-6 boxitems">
                        <Bounce top>
                            <div className="box">
                                <h2>FrontEnd development</h2>
                                <p>
                                    A front-end web developer is responsible for
                                    implementing visual and interactive elements
                                    that users engage with through their web
                                    browser when using a web application
                                </p>
                                <div className="fe-image">
                                    <img
                                        className="icons"
                                        title="ReactJs"
                                        src={react}
                                        alt="react"
                                        style={{position:'center'}}
                                    />
                                    <img
                                        className="icons"
                                        title="HTML5"
                                        src={html}
                                        alt="html"
                                        style={{position:'center'}}

                                    />
                                    <img
                                        className="icons"
                                        title="CSS3"
                                        src={css}
                                        alt="css"
                                        style={{position:'center'}}

                                    />
                                    <img
                                        className="icons"
                                        title="JavaScript"
                                        src={js}
                                        alt="js"
                                        style={{position:'center'}}

                                    />
                                </div>
                            </div>
                            </Bounce>
                        </div>

                        <div className="col-md-3 col-sm-6 boxitems">
                            <Bounce bottom>
                            <div className="box">
                                <h2>BackEnd development</h2>
                                <p>
                                    As a backend engineer i'm responsible for
                                    designing, building, and maintaining the
                                    server-side of web applications and to build
                                    the structure of a software application
                                </p>
                                <div className="fe-image fe-image2">
                                    <img
                                        className="icons"
                                        title="NodeJs"
                                        src={nodejs}
                                        alt="nodejs"
                                        style={{position:'center'}}

                                    />
                                    <img
                                        className="icons"
                                        title="ExpressJs"
                                        src={expressjs}
                                        alt="expressjs"
                                        style={{position:'center'}}

                                    />
                                </div>
                            </div>
                            </Bounce>
                        </div>

                        <div className="col-md-3 col-sm-6 boxitems">
                        <Bounce right>
                            <div className="box">
                                <h2>Data Base</h2>
                                <p>
                                    A database is an organised and structured
                                    collection of this data and a database
                                    management system is a tool which
                                    manages, organises and interacts with the
                                    databases and fetched from it for various requirement
                                </p>
                                <div className="fe-image fe-image2" style={{alignItems:'center'}}>
                                    <img
                                        className="icons"
                                        title="mongodb"
                                        src={mongodb}
                                        alt="mongodb"
                                        style={{position:'center'}}

                                    />
                                    <img
                                        className="icons"
                                        title="postgresql"
                                        src={postgresql}
                                        alt="postgresql"
                                        style={{position:'center'}}

                                    />
                                </div>
                            </div>
                            </Bounce>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
