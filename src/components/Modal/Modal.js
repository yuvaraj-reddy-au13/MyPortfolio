// import React from 'react'
// import styled from 'styled-components'
// import { MdClose } from 'react-icons/md';
// import eshop from '../../images/projectpics/eshop.png'

// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';



// const Modal = ({showModal, setShowModal}) => {

//     const BackGround = styled.div`
//         width:100%;
//         height : 100%;
//         backgroud-color : grey;
//         position : fixed;
//         display : flex;
//         justify-content : center;
//         align-items : center;
//     `
//     const ModalWrapper = styled.div`
//         width : 800px;
//         height : 600px;
//         box-shadow : grey;
//         backgroud : #fff;
//         color : #000;
//         display : grid;
//         grid-template-column : 1fr 1fr;
//         position :  relative ;
//         z-index : 10;
//         porder-radius : 10px;
//     `

//     const modalImg = styled.img`
//         width : 100%;
//         height : 100%;
//         border-radius : 10px 0 0 10px ;
//         background : #000;

//         p{
//             margin-bottom : 1rem;
//         }

//         button {
//             padding : 10px 24px;
//             background : #141414;
//             color : #fff;
//             border : none;
//         }
//     `
   

//     const CloseButton = styled(MdClose)`
//     curser : pointer;
//     position : absolute;
//     top : 20%;
//     right : 20%;
//     width : 32%;
//     height : 32%;
//     padding : 1px;
//     z-index : 10;
//     `;

//     const ModalContent = styled.div`
//         color: blue;
//     `

//     return (
//         <div>
//             {showModal ? 
//                 (
//                     // <BackGround>
//                     //     <ModalWrapper showModal={showModal}>
//                     //     <modalImg src={eshop} alt='sample' />
//                     //     <ModalContent>
//                     //         <h1>Are U Ready?</h1>
//                     //         <button>join now</button>
//                     //     </ModalContent>
//                     //     <CloseButton
//                     //         aria-label='close Modal' 
//                     //         onClick={() => setShowModal(prev => !prev)}
//                     //      />
//                     //     </ModalWrapper>
//                     // </BackGround>
//                     // <h2>Hello </h2>
//                     <Popup trigger={<button> Trigger</button>} position="right center">
//                         <div>Popup content here !!</div>
//                     </Popup>
//                 )
//              : null}
//         </div>
//     )
// }

// export default Modal




// import React, { Component } from "react";
// export default class Modal extends Component {
//   handleClick = () => {
//    this.props.toggle();
//   };
// render() {
//   return (
//    <div className="modal">
//      <div className="modal_content">
//      <span className="close" onClick={this.handleClick}>&times;</span>
//      <p>I'm A Pop Up!!!</p>
//      <h1>hello</h1>
//     </div>
//    </div>
//   );
//  }
// }

// import React from "react";
// // import "./Modal.css";

// function Modal({ setOpenModal }) {
//   return (
//     <div className="modalBackground">
//       <div className="modalContainer">
//         <div className="titleCloseBtn">
//           <button
//             onClick={() => {
//               setOpenModal(false);
//             }}
//           >
//             X
//           </button>
//         </div>
//         <div className="title">
//           <h1>Are You Sure You Want to Continue?</h1>
//         </div>
//         <div className="body">
//           <p>The next page looks amazing. Hope you want to go there!</p>
//         </div>
//         <div className="footer">
//           <button
//             onClick={() => {
//               setOpenModal(false);
//             }}
//             id="cancelBtn"
//           >
//             Cancel
//           </button>
//           <button>Continue</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Modal;

import React from 'react';
// import './Modal.css';

export const Modal = ({ show, close }) => {
  return (
    <div className="modal-wrapper"
      style={{
        transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
        opacity: show ? '1' : '0'
      }}
    >
      <div className="modal-header">
        <p>Welcome To Our Site</p>
        <span onClick={close} className="close-modal-btn">x</span>
      </div>
      <div className="modal-content">
        <div className="modal-body">
          <h4>Modal</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, placeat aliquam? Nostrum vero fugiat rem, itaque molestias ipsa quae facilis.</p>
        </div>
        <div className="modal-footer">
          <button onClick={close} className="btn-cancel">Close</button>
        </div>
      </div>
    </div>
  )
};
