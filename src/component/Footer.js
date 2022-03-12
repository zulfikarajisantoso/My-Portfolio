import React from 'react';
import {SiGooglemaps, SiLaravel, SiFirebase } from 'react-icons/si'
import {AiOutlineMail, AiOutlineCopyrightCircle} from 'react-icons/ai'
import {RiTelegramLine} from 'react-icons/ri'
import {FaReact, FaVuejs} from 'react-icons/fa'
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
      <div className='d-flex align-items-center' style={{ backgroundColor:'#000', zIndex:'50', height:'60px'}}>
        <div className='container d-flex justify-content-between align-items-center ' style={{}} >
            <h6 className=' namaa fw-bolder d-flex align-items-center fs-5 '> ZASSL</h6>
            <h6 className=' d-flex align-items-center fo1 ' style={{ color:'rgb(206, 206, 206' }}> Copyright <AiOutlineCopyrightCircle className='mx-1' /> 2022 programmer Zulfikar Aji Santoso. <i className=' d-none d-md-flex '> All Rights Research</i> </h6>
         </div>
          
      </div>
      
  );
};

export default Footer;
