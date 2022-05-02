import React from 'react';
import Iquote from './Iquote';
import Quote from './Quote';

const QuoteBox = ({background, randomNumber}) => {
    return (
            
        <div className='card'>
            <Iquote background={background}/>
            <Quote randomNumber ={randomNumber}/>
        </div>
    );
};

export default QuoteBox;