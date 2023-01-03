import React from 'react'; 

const Section = ({ title, children }) => {
    return (
        <div className='section'>
            <h4>{title}</h4>
            {children}
        </div>
    );
}

export default Section;