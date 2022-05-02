import React from 'react';

const Iquote = ({background}) => {
    return (
        <div>
            <i className="fa-solid fa-quote-left" style={{fontSize: '100px', color: background}}></i>
        </div>
    );
};

export default Iquote;