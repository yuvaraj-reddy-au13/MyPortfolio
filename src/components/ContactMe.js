import React from "react";
import { useAlert } from "react-alert";

import emailjs from "emailjs-com";
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
                alert("mail sent successfully!");
                console.log(res);
                // form.reset()
            })
            .catch((err) => console.log(err));

        form.reset();
    };
    return (
        <>
            <div
                className=" my-2"
                style={{
                    backgroundColor: "rgb(240, 235, 238)",
                    display: "flex",
                    justifyContent: "space-around",
                    flexDirection: "vertical",
                }}
            >
                {/* <div className="container" style={{alignContent:"center"}}>Contact Address</div> */}
                {/* <div className='container google-maps'> <h1> contact maps </h1> </div> */}
                <div
                    className=" container lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"
                    style={{
                        border: "2px solid rgb(158, 150, 155)",
                        borderRadius: "10px",
                        // display: "flex",
                    }}
                >
                    <iframe

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
                    ></iframe>
                    <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                                ADDRESS
                            </h2>
                            <p className="mt-1">
                                No.24, BTM 1st Stage, Old Madiwala, Bangalore -
                                560068
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
                            <p className="leading-relaxed">6362923327</p>
                        </div>
                    </div>
                </div>

                <div
                    className="container sm-12  contact-form"
                    style={{
                        // marginTop: "50px",
                        width: "100%",
                        backgroundColor: "white",
                        border: "2px solid rgb(158, 150, 155)",
                        borderRadius: "10px",
                        // backgroundImage: `url('https://img.freepik.com/free-photo/hand-painted-watercolor-background-with-sky-clouds-shape_24972-1095.jpg?size=626&ext=jpg')`,
                        // backgroundPosition: "center",
                        // backgroundSize: "cover",
                    }}
                >
                    <h1 style={{ marginTop: "25px", textAlign: "center" }}>
                        Contact Form
                    </h1>
                    <form
                        className="row"
                        style={{ margin: "25px 85px 75px 100px" }}
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
                        <input
                            type="submit"
                            value="Send"
                            className="form-control btn btn-primary"
                            style={{ marginTop: "30px" }}
                        />
                    </form>
                </div>
            </div>
        </>
    );
};

export default ContactMe;

// import React from 'react'

// const ContactMe = () => {
//     return (
//         // <div>
//         <section className="text-gray-600 body-font relative">
//         <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
//           <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
//             {/* <iframe title="Yuvraj's Address" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d972.2054117043182!2d77.61685882918603!3d12.919181999430638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU1JzA5LjEiTiA3N8KwMzcnMDIuNyJF!5e0!3m2!1sen!2sin!4v1627286777254!5m2!1sen!2sin" style={{width:'600px', height:"450", border:'0'  }} allowfullscreen="" loading="lazy"></iframe> */}
//                 {/* <iframe width="100%" height="100%" className="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7777.554016344355!2d77.60947612368899!3d12.922048863553462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14ff6fefc32f%3A0xd7a0acd659763c60!2s1st%20Stage%2C%20BTM%20Layout%201%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1609608769304!5m2!1sen!2sin" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> */}
//                 <iframe width="100%" height="100%" className="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7777.554016344355!2d77.60947612368899!3d12.922048863553462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14ff6fefc32f%3A0xd7a0acd659763c60!2s1st%20Stage%2C%20BTM%20Layout%201%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1609608769304!5m2!1sen!2sin" style={{width:'600px', height:"450", border:'0', frameborder:"0"  }}  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
//             <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
//               <div className="lg:w-1/2 px-6">
//                 <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
//                 <p className="mt-1">No.24, BTM 1st Stage, Old Madiwala, Bangalore - 560068</p>
//               </div>
//               <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
//                 <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
//                 <a className="text-indigo-500 leading-relaxed">yuvarajreddym@gmail.com</a>
//                 <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
//                 <p className="leading-relaxed">6362923327</p>
//               </div>
//             </div>
//           </div>
//           <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
//             <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback :</h2>
//             <p className="leading-relaxed mb-5 text-gray-600">Please give us a genuine feedback about our website </p>
//             <div className="relative mb-4">
//               <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
//               <input type="text" id="name" name="name" placeholder="Enter Name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
//             </div>
//             <div className="relative mb-4">
//               <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
//               <input type="email" id="email" name="email" placeholder="Enter Email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
//             </div>
//             <div className="relative mb-4">
//               <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
//               <textarea id="message" name="message" placeholder="write some msg" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
//             </div>
//             <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
//             <p className="text-xs text-gray-500 mt-3">Thanks for giving us your valueable Feedback</p>
//           </div>
//         </div>
//       </section>
//     //   <div/>
//     )
// }

// export default ContactMe

// import React from 'react'

// const ContactMe = () => {
//     return (
//         <div className='container sm-1 md-6 lg-12'>
//             ContactMe :
//             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d972.2054117043182!2d77.61685882918603!3d12.919181999430638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU1JzA5LjEiTiA3N8KwMzcnMDIuNyJF!5e0!3m2!1sen!2sin!4v1627287796473!5m2!1sen!2sin" width={800} height={600} style={{border: 0}} allowFullScreen loading="lazy" />
//             {/* <iframe title="Yuvraj's Address" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d972.2054117043182!2d77.61685882918603!3d12.919181999430638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU1JzA5LjEiTiA3N8KwMzcnMDIuNyJF!5e0!3m2!1sen!2sin!4v1627286777254!5m2!1sen!2sin" style={{width:'600px', height:"450", border:'0'  }} allowfullscreen="" loading="lazy"></iframe> */}
//         </div>
//     )
// }

// export default ContactMe
