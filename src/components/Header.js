import { Button } from "react-bootstrap";
import React, { useState } from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

import resume from '../images/resume/YuvarajReddyMResume.pdf';


import axios from 'axios';

import { useSpring, animated, config } from 'react-spring'

import {Bounce} from 'react-reveal'




const downloadfile = () => {
    axios({
        // url: 'https://drive.google.com/file/d/1xPzfUd9iXFX600O1dCofAlaCGzNRecXb/view',
        url : resume,
        method: 'GET',
        responseType: 'blob', // important
    }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'YuvarajReddyResume.pdf'); 
        document.body.appendChild(link);
        link.click();
    });
}

//****** */ hello *****************
const Hello = () => {
    const [flip, set] = useState(false)
    const props = useSpring({
      to: { opacity: 1 },
      from: { opacity: 0 },
      reset: true,
      reverse: flip,
      delay: 100,
      config: config.molasses,
      onRest: () => set(!flip),
    })
  
    return <animated.h1 style={props}>hello, I'M Yuvraj </animated.h1>
  }


//   import ScrollToTop from "react-scroll-to-top";
 
// function CoolPage() {
//   return (
//     <div>
//       <ScrollToTop smooth />
//       <h1>Hello, world!</h1>
//     </div>
//   );
// }



const Header = () => {



    return (
        <div id="home" className="header-wrapper">
            <div className="main-info">
                <h1  className="hello"> <Hello /> </h1>
                <Bounce top>
                <h3> Full Stack Developer</h3>
                </Bounce>

                <Bounce bottom>
                <Typed
                    className="text-typed"
                    strings={[
                        "Mern Stack development",
                        "JavaScript",
                        "ReactJs",
                        "NodeJs",
                        "ExpressJs",
                        "MonGoDB",
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                />
                </Bounce>

                <Button
                style={{justifyContent:'center'}}

                    title="Contact Me"
                    href="#"
                    variant="info"
                    className="contact-btn1"
                >
                    <Link to='contactme' style={{padding:"10px 20px"}}>
                
                        Contact Me
                
                    </Link>
                </Button>

                 
                <Button
                style={{justifyContent:'center'}}
                    title="Download Resume"
                    href="#"
                    variant="info"
                    className="contact-btn2 container"
                    onClick={downloadfile}
                >

                
                get my Resume
               
                </Button>

                <button
                style={{justifyContent:'center'}}
                    title="Scroll Down"
                    href="#"
                    // variant="info"
                    className="contact-btn2 scroll-btn container"
                    
                >

    
                <Link to="aboutme">
                    <div className='scrolldown' style={{justifyContent:'center', ZIndex:2, marginLeft:'50%', marginTop:'6%'}}>
                <div className="chevrons">
                    <div className='chevrondown'></div>
                    <div className='chevrondown'></div>
                </div>
            </div>
            </Link>
                </button>
         
            </div>

        </div>
    );
};

export default Header;
