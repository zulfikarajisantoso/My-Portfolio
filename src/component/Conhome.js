import React, {useState, useEffect} from 'react';
import moon from '../img/moon.png'
import tor from '../img/ini.jpg'

const Conhome = () => {

    const [offset, setoff] = useState(0)

    const scrool = () => setoff(window.pageYOffset)
    
    useEffect(() => {
        window.addEventListener('scroll', scrool)
        return () => window.removeEventListener('scroll', scrool);

    })

  return (
      <div className='zoom '>
          <img src={tor} className='ba' />
          {/* <img src={moon} id='img1' style={{ transform:`translateY(${offset * 0.2}px)`}} /> */}
            <div className='bu d-flex justify-content-center align-items-center' >
                <link rel="preconnect" href="https://fonts.gstatic.com" /> 
                <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />

                <button className='butto'>CONTACT ME</button>
            </div>
      </div>
      
  )
};

export default Conhome;
