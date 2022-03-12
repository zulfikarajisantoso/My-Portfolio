
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbarr from './component/Navbarr';

import Contactus from './component/Contactus';
import Footer from './component/Footer';
import Hero from './component/Hero';
import Projects from './component/Projects';
import Resume from './component/Resume';
import Testimonial from './component/Testimonial';


function App() {
  return (
 
    

   <div className="App">
     <div >
      <div className="starsec"></div>
      <div className="starthird"></div>
      <div className="starfourth"></div>
      <div className="starfifth"></div>
    </div>
    
    <BrowserRouter>
    <Navbarr />

          <Hero  />
          <Projects  /> 
          <div >
      <div className="starsec"></div>
      <div className="starthird"></div>
      <div className="starfourth"></div>
      <div className="starfifth"></div>
    </div>
          <Testimonial  /> 
          
          <Resume />
          <Contactus />     
          <Footer />
      </BrowserRouter>
            
      </div>
   
 
  );
}

export default App;
