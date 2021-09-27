// import React from 'react';
// import eshop from '../images/projectpics/eshop.png'
// import dailystories from '../images/projectpics/dailystories.png'
// import covidtracker from '../images/projectpics/covidtracker.png'
// import myalbumn from '../images/projectpics/myalbumn.png'

// const Portfolio = () => {
//     return (
//         <div className="portfolio-wrapper">
//             <div className="container">
//                 <h1 className="text-uppercase text-center py-5">Portfolio</h1>
//                 <div className="image-box-wrapper row justify-content-center ">
//                     <img className="portfolio-image" src={eshop} alt='eshopshoppingcart app' />
//                 </div>
                
//                 <div className="image-box-wrapper row justify-content-center ">
//                     <img className="portfolio-image" src={dailystories} alt='dailystories-blog app' />
//                 </div>

//                 <div className="image-box-wrapper row justify-content-center ">
//                     <img className="portfolio-image" src={covidtracker} alt='covid tracking app' />
//                 </div>

//                 <div className="image-box-wrapper row justify-content-center ">
//                     <img className="portfolio-image" src={myalbumn} alt='myalbumn app' />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Portfolio









import React, { useState } from 'react'
import eshop from '../images/projectpics/eshop.png';
import dailystories from '../images/projectpics/dailystories.png';
import covidtracker from '../images/projectpics/covidtracker.png';
import myalbumn from '../images/projectpics/myalbumn.png';

// import ModalButton from './Sample.js'

import { Modal } from '../components/Modal/Modal';

import { Zoom } from 'react-reveal'













const Portfolio = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const closeModalHandler = () => [setShow1(false), setShow2(false), setShow3(false), setShow4(false)];



  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">Portfolio</h1>
        <div className=" container image-box-wrapper column justify-content-center sample">
          <Zoom right>
          <a href='https://eshopshoppingcart.herokuapp.com' target="_blank" rel="noreferrer">
            <img className="portfolio-image image1" title='click for demo' onClick={() => setShow1(true)} src={eshop} alt='eshopshopping app' />
          </a>
          </Zoom>

          <Zoom top>
          <a href='https://dailystories-blog.herokuapp.com' target="_blank" rel="noreferrer">
            <img className="portfolio-image image2" title='click for demo' onClick={() => setShow2(true)} src={dailystories} alt='dailystories-blog app' />
          </a>
          </Zoom>

          <Zoom bottom>
          <a href='https://covidtracker2.netlify.app' target="_blank" rel="noreferrer">
            <img className="portfolio-image image3" title='click for demo' onClick={() => setShow3(true)} src={covidtracker} alt='covidtracker app' />
          </a>
          </Zoom>

          <Zoom left>
          <a href='https://myalbumnapp.herokuapp.com' target="_blank" rel="noreferrer">
            <img className="portfolio-image image4" title='click for demo' onClick={() => setShow4(true)} src={myalbumn} alt='myalbumn app' />
          </a>
          </Zoom>
          
          {/* <img className="portfolio-image image4" src={myalbumn} alt='myalbumn app' /> */}
        </div>

        
      </div>
      
    </div>
  )
}

export default Portfolio










