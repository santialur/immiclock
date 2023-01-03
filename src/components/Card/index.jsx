import React from 'react'; 

const Card = ({ children, title, icon }) => {
    return (
        <div className='col'>
          <div>
            <h4><i className={`fa fa-${icon}`}></i> {title} </h4>
          </div>
          {children}
        </div>
    );
}

export default Card;