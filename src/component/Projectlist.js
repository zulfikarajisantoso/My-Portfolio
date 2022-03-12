import React from 'react'

const Projectlist = ({id,active,title, setselected, icon}) => {
    return (
        <div  className=' d-flex flex-column '>
            <li className={active ? 'll active ' : 'll'} onClick={() => setselected(id)}  >{title} </li>
            <p className={active ? 'll1 active  ml-4' : 'll1 '}  >{icon}</p>
        </div>
          
    )
}

export default Projectlist

