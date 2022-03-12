
import {RiSeparator} from 'react-icons/ri';
import{FaUserGraduate, FaLaptopCode} from 'react-icons/fa';
import{MdWorkOutline} from 'react-icons/md';
import React, { useEffect, useState } from 'react';
import {education, work, skill} from './Resumelist'
import Resumels from './Resumels';



const Resume = () => {

    const [select, setselect] = useState("educa")
    const [data, setdata] = useState([])

    const reslist = [
        {
            id:'educa',
            title: 'Education',
            icon: <FaUserGraduate />
        },
        {
            id:'work',
            title: 'Work History',
            icon: <MdWorkOutline />
        },
        {
            id:'skil',
            title: 'Skills',
            icon: <FaLaptopCode />
        },
    ]
    useEffect(() => {
         
        switch(select) {
            case "educa":
                setdata(education)
                break;
            case "work":
                setdata(work)
                break;
            case "skil":
                setdata(skill)
                break;
                default:
                    setdata(education)
        }
    }, [select])


  return(
      <div className='d-flex flex-column align-items-center' id='detail' >     
            <div className='container d-flex justify-content-between align-items-center mt-5'>
                    <p className='r1 '> Destails My Bio</p>
                    <div>
                        <RiSeparator className='r2'/>
                        <RiSeparator className='r2' style={{  color:'rgb(79, 150, 231)' }} />
                        <RiSeparator className='r2' style={{ color:'rgb(231, 97, 79)' }} />
                    </div>
                    <h1 className='nama  '> Resume</h1>
                </div>     
        <div className='container d-flex align-items-center mt-5' >
                <div className='row  d-flex align-items-center' style={{backgroundColor:'rgb(206, 206, 206)',  width:'100vw'}} >
                    <div className='col-md-5 col-12 shad ' >
                            {reslist.map((li, idx) => (
                                <Resumels key={idx} title = {li.title} icon={li.icon} active = {select === li.id} id={li.id} setselect={setselect}  />
                            ))}                           
                    </div>
                    <div className='col-md-7 col-12'>
                         {data.map((item, idx) => {
                             return (
                                <div key={idx} className='kana'>{item.data}</div>
                             )
                         })}
                    </div>

                </div>

        </div>

      </div>
  );
};

export default Resume;
