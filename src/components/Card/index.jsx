import React from 'react'; 

const Card = ({ children, title, icon }) => {
    return (
        <div className='col'>
          <div>
            <h2><i className={`fa fa-${icon}`}></i> {title} </h2>
          </div>
          {children}
        </div>
    );
}

export default Card;