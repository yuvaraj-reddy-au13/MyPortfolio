import './App.css';
import NavBar from './components/NavBar'
import Header from './components/Header'
import Particles from 'react-particles-js';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
// import ModelButton from './components/Sample.js';
// import Testimonial from './components/Testimonial.js';
// import ContactMe from './components/ContactMe.js';
import ContactMe from './components/ContactMain.js';
import Footer from './components/Footer.js';
import ScrollToTop from './components/ScrollTop.js';



function App() {
  return (
    <>
      <Particles 
        params={{
          particles:{
            number:{
              value : 30,
              density : {
                enable : true,
                value_area : 900
              }
            },
            shape:{
              type:'circle',
              stroke : {
                width : 6,
                color : "whitesmoke"
              }
            }
          }
        }}
      />
      <NavBar />
      <Header />
      <AboutMe />
      <Services />
      <Experience />
      <Portfolio />
      {/* <Testimonial /> */}
      <ContactMe />
      <Footer />
      <ScrollToTop />
      
    </>
  );
}

export default App;
