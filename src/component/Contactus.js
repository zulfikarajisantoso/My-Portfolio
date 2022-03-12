import React from 'react';
import log from '../img/logg.png';
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'
import {SiGooglemaps} from 'react-icons/si'
import {MdEmail} from 'react-icons/md'
import {BsFillTelephoneFill} from 'react-icons/bs'


const Contactus = () => {

    function sendemaail(e) {
        e.preventDefault();
        emailjs.sendForm('service_on5tm7r','template_vvssqbf', e.target,'user_1ccv5kE7c4HeTRnJHA93i')
        .then(res => {
            Swal.fire(
                'Success',
                'Your message has been sent',
                'success'
              )
        }).catch(err => console.log(err))
        e.target.reset()
    }


  return(
      <div className="container mt-md-none mt-5" id='contact' style={{ backgroundColor:'#181828'}}>

          <div className=" row">
              <div className='col-md-6 d-flex align-items-center'>
                  <div className=" d-flex flex-column align-items-center">
                        <div className='d-flex justify-content-center' > 
                        <img src={log} className='c1' />  </div>
                        <div className='d-flex justify-content-center align-items-center mt-5'> 
                          
                            <div className='c2 text-center' style={{ marginLeft:'20px'}}>
                                <p>I am open for your ideas, questions and needs. Our clients get the superior results when a short-term acquaintance turns into a long-term collaboration.</p>
                            </div>
                        </div>
                  </div>
              </div>
              <div className='col-md-6 d-flex flex-column align-items-center justify-content-center' >
                  <h4 className=' text-center mt-2 mt-md-none  r12' >SEND A MESSAGE</h4>
                  <form className='d-flex flex-column align-items-center' onSubmit={sendemaail}>
                      <input placeholder='NAME' name='name' className=' p-3 mt-3 bal' style={{ height:'3rem'}}  />
                      <input placeholder='EMAIL' name='emailuser'  className='p-3 mt-3  bal' style={{height:'3rem'}} />
                      <textarea placeholder='MESSAGE' name='message' className='p-3 bal mt-3'   style={{height:'10rem'}}  ></textarea>
                      <button className=' subcin mt-5' type='submit'  >SUBMIT</button>
                  </form>
                  <div className='d-flex flex-column mt-5 mb-4 mb-md-none'>
                         <h6 style={{ fontSize:'18px', color:'rgb(206, 206, 206'}}><MdEmail /> | zulfikarajisan@gmail.com </h6>
                         <h6 className='my-3' style={{ fontSize:'18px', color:'rgb(206, 206, 206' }}><SiGooglemaps /> | Jl.Tritura No.112 Toraja, Indonesia</h6>
                         <h6 style={{ fontSize:'18px', color:'rgb(206, 206, 206' }}><BsFillTelephoneFill /> | +62 8212494012 </h6>
                  </div>
              </div>
              
          </div>

      </div>

  )
};

export default Contactus;
