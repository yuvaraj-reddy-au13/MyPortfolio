import React from "react";
import emailjs from "emailjs-com";
// import { MdEmail } from 'react-icons/md'
// import { MdEmail } from 'social-media-icons-react/md'
import { MdLocationOn } from "react-icons/md";
import { Flip } from 'react-reveal'

import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { store } from 'react-notifications-component';



import { Alert } from 'react-bootstrap'

const Message = () => {
  return <Alert variant='success' style={{display:'none'}}>message sent</Alert>
}

Message.defaultProps = {
  variant: 'info',
}


const clickformessage = () => {
    console.log('sent message ')
    store.addNotification({
        title: "Wonderful!",
        message: "teodosii@react-notifications-component",
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true
        }
      });
}


const ContactMe = () => {
    const sendEmail = (e) => {
        e.preventDefault();
        const form = document.getElementById("form");

        emailjs
            .sendForm(
                "service_g2xz7f9",
                "template_ttduxqp",
                e.target,
                "user_qdjs4O4ayNIFEqiPIdJmm"
            )
            .then((res) => {
                // clickformessage()
                alert('Message Sent')
                console.log(res);
                // form.reset()
            })
            .catch((err) => console.log(err))

        form.reset();

    };

   


    return (
        <div id='contactme' className="services mt-2 ">
            <h2 className="myservices">CONTACT ME</h2>
            <div className="py-5 ">
                <div className="container ">
                    <div className="row contactme">
                        {/* <div className="col-md-6 col-sm-12">
                            <div className="box">
                                <h2>FrontEnd development</h2>
                                <p>
                                    A front-end web developer is responsible for
                                    implementing visual and interactive elements
                                    that users engage with through their web
                                    browser when using a web application
                                </p>
                                
                            </div>
                        </div> */}

                        <Flip left>

                        <div
                            className="container contact-map"
                            // className=" lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"
                            style={{
                                border: "2px solid rgb(158, 150, 155)",
                                borderRadius: "10px",
                                // height:"50rem"
                                width: "40%",
                                // display: "flex",
                            }}
                        >
                            <h4>MY ADDRESS</h4>
                            {/* <iframe
                                width="100%"
                                height="100%"
                                className="absolute inset-0"
                                frameborder="0"
                                title="map"
                                marginheight="0"
                                marginwidth="0"
                                scrolling="no"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7777.554016344355!2d77.60947612368899!3d12.922048863553462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14ff6fefc32f%3A0xd7a0acd659763c60!2s1st%20Stage%2C%20BTM%20Layout%201%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1609608769304!5m2!1sen!2sin"
                                style={{ border: "0" }}
                                allowfullscreen=""
                                aria-hidden="false"
                                tabindex="0"
                            ></iframe> */}

                            {/* <iframe
                                frameborder="0"
                                title="map"
                                marginheight="0"
                                marginwidth="0"
                                className="absolute inset-0"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d972.2054117043182!2d77.61685882918603!3d12.919181999430638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU1JzA5LjEiTiA3N8KwMzcnMDIuNyJF!5e0!3m2!1sen!2sin!4v1627287796473!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: "0" }}
                                allowfullscreen=""
                                loading="lazy"
                                aria-hidden="false"
                                tabindex="0"
                            ></iframe> */}
                            
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d972.2053128420259!2d77.61690732916998!3d12.919207399430665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15a18f7ac403%3A0xba6323d88408a3eb!2sGangamma%20Temple!5e0!3m2!1sen!2sin!4v1627299698302!5m2!1sen!2sin"
                                frameborder="0"
                                title="map"
                                marginheight="0"
                                marginwidth="0"
                                className="absolute inset-0 iframe"
                                width="70%"
                                height="55%"
                                style={{ border: "0" }}
                                allowfullscreen=""
                                loading="lazy"
                                aria-hidden="false"
                                tabindex="0"
                            ></iframe>
                            
                            {/* <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                                <div className="lg:w-1/2 px-6">
                                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                                        ADDRESS
                                    </h2>
                                    <p className="mt-1">
                                        No.24, BTM 1st Stage, Old Madiwala,
                                        Bangalore - 560068
                                    </p>
                                </div>
                                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                                        EMAIL
                                    </h2>
                                    <a className="text-indigo-500 leading-relaxed">
                                        yuvarajreddym@gmail.com
                                    </a>
                                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                                        PHONE
                                    </h2>
                                    <p className="leading-relaxed">
                                        6362923327
                                    </p>
                                </div>
                            </div> */}
                            <div className=" container d-flex location justify-content-center my-4">
                                <h4>
                                    {" "}
                                    <MdLocationOn /> #24, BTM LAYOUT 1st Stage,
                                    BENGALURU 
                                </h4>
                            </div>
                        </div>
                        </Flip>

                        <Flip right>

                        <div className="col-md-6 col-sm-8">
                            <div
                                className="container  contact-form"
                                style={{
                                    // marginTop: "50px",
                                    width: "100%",
                                    backgroundColor: "white",
                                    // margin:'40px',
                                    border: "2px solid rgb(158, 150, 155)",
                                    borderRadius: "10px",
                                    // backgroundImage: `url('https://img.freepik.com/free-photo/hand-painted-watercolor-background-with-sky-clouds-shape_24972-1095.jpg?size=626&ext=jpg')`,
                                    // backgroundPosition: "center",
                                    // backgroundSize: "cover",
                                }}
                            >
                                <h4
                                    style={{
                                        marginTop: "25px",
                                        textAlign: "center",
                                    }}
                                >
                                    SEND A MAIL
                                </h4>
                                <form
                                    className="row"
                                    style={{
                                        margin: "25px 85px 75px 100px",
                                        justifyContent:"space-between"
                                    }}
                                    onSubmit={sendEmail}
                                    id="form"
                                >
                                    <label>NAME</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Your Name"
                                        required="true"
                                        name="name"
                                        className="form-control my-2 input-field"
                                    />

                                    <label>E-MAIL</label>
                                    <input
                                        type="email"
                                        placeholder="Enter Your Email"
                                        required="true"
                                        name="user_email"
                                        className="form-control my-2"
                                    />

                                    <label>PHONE NUMBER</label>
                                    <input
                                        type="tel"
                                        placeholder="Enter Your Contact Number"
                                        required="true"
                                        maxlength="10"
                                        name="phone_number"
                                        className="form-control my-2"
                                    />

                                    <label>MESSAGE</label>
                                    <textarea
                                        name="message"
                                        placeholder="Enter Your Message"
                                        required="true"
                                        rows="4"
                                        className="form-control my-2"
                                    />
                                    {/* <ReactNotification /> */}
                                    <input
                                        type="submit"
                                        value="SEND"
                                        className="form-control btn btn-primary"
                                        style={{ marginTop: "30px" , marginRight:'40px' }}
                                        // onClick={message}
                                        
                                    />
                                </form>
                            {/* {message ? <Message /> : null} */}
                            </div>
                        </div>
                        </Flip>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;
