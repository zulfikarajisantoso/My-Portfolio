import React, { useEffect, useState } from 'react'

import Projectlist from './Projectlist'
import { webapp, mobileapp } from './Data'
import {BsLaptop} from 'react-icons/bs'
import {FiSmartphone} from 'react-icons/fi'



const Projects = () => {

    const [select,  setselected] = useState("web")
    const [data,  setdata] = useState([])

    const list = [
        {
            id: "web",
            title: 'Web App',
            icon: <BsLaptop />
        },
        {
            id: "mobile",
            title: 'Mobile App',
            icon: <FiSmartphone />

        },
    ]
    useEffect(() => {
    
        switch(select){  
            case "web":
                setdata(webapp)
                break;
            case "mobile":
                setdata(mobileapp)
                break;
                default:
                    setdata(webapp)
               
          
        }

    }, [select])

    return (
        <section id='projects1' className='mt-3 d-flex flex-column  nama ' >
            
            <div className='container d-flex justify-content-between'>
               
                <ul className=' d-flex ' style={{ cursor:"pointer"}}>
                    {list.map((item, idx) => {
                        return(
                            <Projectlist key={idx} title={item.title} icon={item.icon} active={select === item.id} id={item.id} setselected={setselected} />
                        )
                    })}
                
                </ul>
                <h1 className='pro1 nama' >Projects</h1>
            </div>
            
            
            <div className='container mt-5'>
                <div className='row mt-2'>
                    {data.map((dat, idx) => {
                        return(
                            <div key={idx} className='col-md-4 col-12 d-flex flex-column justify-content-center'>
                                <div  className=" d-flex justify-content-between px-4">
                                    <p className='cob' style={{ fontSize:'1rem'}}> {dat.judul}</p>
                                
                                    <p className=' cob '  >{dat.tgl}  </p>

                                </div>   
                                <div className='d-flex align-items-center       justify-content-center  '>
                                    <div className='dip'>
                                        <img src={dat.img} style={{ objectFit:'cover', borderRadius: '20px'}}  className=' w-100 h-100 '  />
                                        <div className='ico1 '>
                                            <a className='gmb ' href={dat.Title} >View Project </a>        
                                        </div>
                                    </div>
                    

                                </div>
                                <div className="text-center mt-2">    <p className='nama ' style={{ fontSize:'2rem'}} >{dat.tek}  </p> 
                                </div>
                        </div>
                       
                        )
                    })}
                          
                  
                </div>
            </div>
             
            
        </section>
    )
}

export default Projects
 