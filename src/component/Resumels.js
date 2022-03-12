import React from 'react';

const Resumels = ({ setselect, id, active, icon, title }) => {
  return(
    <div className='row '>
        <div className='col-1 d-flex align-items-center justify-content-center re' style={{  backgroundColor:"#000", zIndex:'10'}} >
            <h6 className={ active ? 'icoo active text-center  text-light' : ' text-center text-light icoo' } onClick={() => setselect(id)}> {icon}</h6>
        </div>
        <div className='col-11 d-flex align-items-center' style={{zIndex:'0'}}>
            <p  className={ active ? 'icoo1 active text-light ' : 'icoo1  cursor-pointer' } onClick={() => setselect(id)} >{title}</p>
        </div>
</div>
  );
};

export default Resumels;
