import React from 'react'
import hero from '../img/hro.png'
import {BsInstagram} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'
import {ImFacebook} from 'react-icons/im'
import {IoIosArrowDropright} from 'react-icons/io'
import {SiGithub} from 'react-icons/si'
import { Link } from 'react-router-dom'
import Navbarr from '../component/Navbarr'


const Hero = () => {
    return (
        
   
        <div id='main' className='hero'  >

             <div className='container  '>
            <div  className=' row d-flex align-items-center'>  
                 
            <div className='col-md-3 mt-md-5 order-2 order-md-first d-flex flex-column justify-content-center  '>
                    <div className='he1 warna'>
                        <p>I'm!</p>
                        <h1 className='fo font-weight-bolder '>Full Stack Web Developer</h1>
                        <div className='garis'></div>
                        <p className='mt-4 my '>My Name Zulfikar Aji Santoso based in Yogyakarta. I've been a front end developer for 2 year and full stack developer for a year. </p>
                        <div className=' d-flex align-items-center'>
                            <a type='button' href='#contact' className=' warna  but  text-decoration-none' >Hire me
                                <span></span><span></span><span></span>   <span></span>
                            </a>
                            <a  tyle='button' href='Transkip.pdf' download='CV Transkip.pdf '  className='fs-1  tooltip-right'  data-tooltip="Download CV" style={{color:'rgb(194, 96, 5)', marginLeft:'3px', }}> <IoIosArrowDropright /></a>
                        </div>
                    </div>
                   
            </div>

             
                <div className='col-md-6 order-first d-flex justify-content-center  mt-md-5  ' style={{ zIndex:'10'}}>
                    <img src={hero} className='fot rounded-circle border-light-5' style={{  zIndex:'10'}} />
                </div>
               
                <div className=' col-md-3 mt-md-5 d-flex flex-column justify-content-center align-items-center '  > 
                   
                    <h2 className=' nama3 d-none d-md-flex h11 ' style={{ fontWeight:'2000' ,}}>Zulfikar Aji Santoso.</h2>\
                   
                    <div className=' d-flex mt-4 align-items-center'>
                        <a href='https://www.instagram.com/laperrman/' className=' fs-2 text-decoration-none nama1 cursor-pointer'><BsInstagram /></a>
                        <a href='https://www.linkedin.com/in/zulfikar-aji-santoso-504a08221/' className=' fs-2 text-decoration-none nama1 mx-4 cursor-pointer'  > <FaLinkedinIn /></a>
                        <a href='https://twitter.com/ZulfikarAjiSan1?t=JEn09nE2ezQGsGPGqdSYpw&s=08' className=' fs-2 text-decoration-none nama1' ><ImFacebook /></a>
                        <a href='https://github.com/zulfikarajisantoso' className=' fs-2 text-decoration-none nama1 mx-4'><SiGithub /></a>
                        
                    </div>
                </div>
            </div>       
        </div>

        </div>
      
     
    )
}
 
export default Hero
