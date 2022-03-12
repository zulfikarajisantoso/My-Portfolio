import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaTimes} from 'react-icons/fa'


import {AiOutlineCopyrightCircle} from 'react-icons/ai'
import {CgMenuGridO} from 'react-icons/cg'
 

const Navbarr = () => {

    const [click , setclick] = useState(false);
    const hadleclick  = () => setclick(!click)

    const [scrol, setscrol]  = useState(false)
    const chagebgnav = () => {
        if(window.scrollY >= 80)
        {
            setscrol(true)
        }
        else{
            setscrol(false)
        }
    }
    window.addEventListener('scroll',chagebgnav )


    return (
        <nav className={scrol ? 'naw activee' : 'naw'}>
            <div className='container' >
            
                <div className='row  '>
                    <div className='d-flex col-6 align-items-center'>  
                            <a href='main' type='button'  className={click ? "text-dark  font " : ' fw-bolder font '} >
                                <h4  className={scrol ? 'namaa2 fw-bolder  d-flex align-items-center mt-2' : ' namaa fw-bolder  d-flex align-items-center  mt-2' }>
                                    ZASSL.
                                </h4>
                            </a>   
                    
                    </div>  
                    <div className='d-flex col-6 justify-content-end '>
                        <div className='d-flex    '  onClick={hadleclick}>    
                                <div className={scrol ? 'namaa2 fw-bolder  d-flex align-items-center ' : 'fw-bolder namaa d-flex align-items-center  '}>
                                {click ?  (<h1 className='ico fw-bolder hover-text-light hovput  mt-2'   style={{ fontSize:'15px', marginRight:'10px '}}>CLOSE</h1>) : (<h1 className=' ico fw-bolder hover-text-light hovput mt-2' style={{ fontSize:'15px', marginRight:'10px' }}>MENU</h1>  ) }
                                </div>                 
                                <div className={scrol ? 'namaa2 fw-bolder  d-flex align-items-center ' : 'fw-bolder namaa d-flex align-items-center  '} >
                                    {click ? (<FaTimes className=' ico fw-bolder hover-text-light hovput   '  style={{ fontSize:'25px'}} /> ) :( <GiHamburgerMenu className=' hovput ico'  style={{ fontSize:'25px'}} />)   }
                            </div>                                          
                        </div>  
                        <ul className={click ? " navnav active " : "navnav"}>
                            
                           
                            <p className='men'>MENU <CgMenuGridO className='' /></p>
                            <li onClick={hadleclick} className='tem nav1'>                              
                                    <a href='#main' className=' col text-decoration-none '  >
                                        Home
                                    </a>                         
                                </li>    
                            <li onClick={hadleclick} className='tem nav1'>
                                <a href='#projects1' className='col text-decoration-none'   >
                                    Projects
                                </a>
                            </li>    
                            <li onClick={hadleclick}  className='tem nav1'>
                                <a href='#testimonials' className='col text-decoration-none '>
                                    Tersimonials
                                </a>
                            </li>    
                            <li onClick={hadleclick}  className='tem nav1'>
                                 <a href='#detail' className='col text-decoration-none'   >
                                    Details Bio
                                </a>    
                            </li>    
                            
                            <li onClick={hadleclick} className='tem nav1'>
                                <a href='#contact'  className='col text-decoration-none'>
                                    Contact
                                </a>    
                            </li> 
                         
                            <div >
                                <p className='text-center  ' style={{ marginBottom:'-100px',  fontSize:'10px', color:'rgb(206, 206, 206)'}} ><AiOutlineCopyrightCircle /> <span>2022 Portfolio by Zulfikar Aji Santoso</span>  </p>
                            </div>
                           
                        
                        </ul>  
                                
                    </div>  
                </div>   
               
            </div>
           
        </nav>
 
    )
}

export default Navbarr
 