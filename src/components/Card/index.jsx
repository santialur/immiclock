import React from 'react'; 

const Card = ({ children, title, icon }) => {
    return (
        <div className='col'>
          <i className={`fa fa-${icon}`}></i>
          <h2> {title} </h2>
          {children}
        </div>
    );
}

export default Card;