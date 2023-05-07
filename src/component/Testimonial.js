import React from 'react'
import {AiFillStar, AiOutlineStar } from 'react-icons/ai'
import {ImQuotesLeft, ImQuotesRight } from 'react-icons/im'
import logo from '../img/logo.jpeg'

const Testimonial = () => {
    return (
        <div className='container d-flex align-items-center' style={{ height:'100vh'}}  id='testimonials'>   
            <div className='row '>
                    <div className='col-lg-4 col-12  nama text-center mt-5 say p-5 pe' >People Say's</div>
                    <div className='col-lg-8 col-12'> 
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators" style={{ bottom:'-50px'}} >
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active   " style={{ width:'18px', height: '18px', borderRadius:'50%'}} aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" className='mx-2' style={{ width:'18px', height: '18px', borderRadius:'50%'}} ></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"  style={{ width:'18px', height: '18px', borderRadius:'50%'}}></button>
                        </div>
                    <div className="carousel-inner ">
                        <div className="carousel-item active">
                           
                                <div className='col-12 d-flex flex-column justify-content-center mb-5 rounded ris ' >
                                    <div className='row'>
                                        <div className=' col-3 d-flex flex-column   align-items-center justify-content-center' style={{ marginLeft:'20px'}}>
                                            <div className= " d-flex flex-column align-items-center " >
                                                <p className='ftes  ' >4.3</p>
                                                <p className=" nama ftes2"  ><AiFillStar /><AiFillStar /> <AiFillStar /> <AiFillStar /><AiOutlineStar />  </p>
                                                <img  src={logo} style={{ bottom:'-80px' }}  className='ftes3 rounded-circle ' />
                                            </div>
                                        </div>
                                        <div className="col-1 d-flex align-items-center">
                                            <div className='riss' style={{ borderLeft:" 3px solid rgb(206, 206, 206)" }}></div>
                                        </div>
                                        <div className='col-7'>
                                            <div>   
                                            <div className='nama d-flex align-items-end ftes2'><ImQuotesLeft /></div>
                                            <i className=" ftes5 text-center " style={{ fontWeight:'900',}}> Dia selalu bisa bekerja mandiri maupun tim karena mempunyai komunikasi yang baik kepada rekan tim. Dia selalu berusaha untuk ontime dalam pekerjaan dan juga selalu ingin belajar hal baru. Santai dan Tapi serius itulah dia.  </i>
                                            <p className="nama ftes2"><ImQuotesRight /> </p>
                                            </div>
                                            <h5 className=' ftes6'> Zulhan Syaputra <i>- Quality Control Manager</i> </h5>
                                        </div>
                                    </div>
                                </div>                                                        
                                                   
                        </div>
                    
                        <div className="carousel-item ">
                           
                                <div className='col-12 d-flex flex-column justify-content-center mb-5 rounded ris' >
                                    <div className='row'>
                                        <div className=' col-3 d-flex flex-column   align-items-center justify-content-center'  style={{ marginLeft:'10px'}}>
                                            <div className= " d-flex flex-column align-items-center ">
                                                <p className='ftes  ' >4.0</p>
                                                <p className=" nama ftes2"  ><AiFillStar /><AiFillStar /> <AiFillStar /> <AiFillStar /><AiOutlineStar />  </p>
                                                <img  src={logo} style={{ bottom:'-80px' }}  className='ftes3 rounded-circle ' />
                                            </div>
                                        </div>
                                        <div className="col-1 d-flex align-items-center">
                                            <div className='riss' style={{ borderLeft:" 3px solid rgb(206, 206, 206)" }}></div>
                                        </div>
                                        <div className='col-7'>
                                            <div>   
                                            <div className='nama d-flex align-items-end ftes2'><ImQuotesLeft /></div>
                                            <i className=" ftes5 text-center " style={{ fontWeight:'900'}}>Aji ini adalah orang yang bertanggung jawab dalam pekerjaannya, mau belajar dan selalu mencoba hal baru, ini itu di coba semua   . Komunikasi dengan tim sangat baik karena orangnya suka guyon.</i>
                                            <p className="nama ftes2"><ImQuotesRight /> </p>
                                            </div>
                                            <h5 className=' ftes6'>Dudi Ali <i>- Programmer</i> </h5>
                                        </div>
                                    </div>
                                </div>                                                        
                                                   
                        </div>
                    
                        <div className="carousel-item ">
                           
                                <div className='col-12 d-flex flex-column justify-content-center mb-5 rounded ris' >
                                    <div className='row'>
                                        <div className=' col-3 d-flex flex-column   align-items-center justify-content-center'  style={{ marginLeft:'10px'}}>
                                            <div className= " d-flex flex-column align-items-center ">
                                                <p className='ftes  ' >3.5</p>
                                                <p className=" nama ftes2"  ><AiFillStar /><AiFillStar /> <AiFillStar /> <AiOutlineStar /><AiOutlineStar />  </p>
                                                <img  src={logo} style={{ bottom:'-80px' }}  className='ftes3 rounded-circle ' />
                                            </div>
                                        </div>
                                        <div className="col-1 d-flex align-items-center">
                                            <div className='riss' style={{ borderLeft:" 3px solid rgb(206, 206, 206)" }}></div>
                                        </div>
                                        <div className='col-7'>
                                            <div>   
                                            <div className='nama d-flex align-items-end ftes2'><ImQuotesLeft /></div>
                                            <i className=" ftes5 text-center " style={{ fontWeight:'900'}}>Programmer baik, suka banget dunia programmer, pinter dan suka IoT juga. Seru kerja bareng dia pokoknya. </i>
                                            <p className="nama ftes2"><ImQuotesRight /> </p>
                                            </div>
                                            <h5 className=' ftes6'>Hartoyo <i>- Programmer</i> </h5>
                                        </div>
                                    </div>
                                </div>                                                                  
                        </div>
                    </div>                   
                    </div>                   
                    </div>               
            </div>    

        
                 
        </div>
    )
}

export default Testimonial

