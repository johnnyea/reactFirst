import React from 'react';
import quotes from '../quotes.json';

const Quote = ({randomNumber}) => {

    return (
        <div>
            <ul>
                <li>{quotes[randomNumber].quote}</li><br />
                <li><b>{quotes[randomNumber].author}</b></li>
            </ul>
        </div>
    );
};

export default Quote;