import React, { useState } from 'react';
import { Load } from '../components/quote/Load';
import { Quote } from '../components/quote/Quote';
import { getQuote } from '../services/simpsonsApi';

const SimpsonsQuotes = () => {
  const [quote, setQuote] = useState({
    character: '',
    text: '',
    image: '',
  });

  const handleClick = async () => {
    const quote = await getQuote();
    setQuote(quote);
  };

  return (
    <>
      <Load 
        handleClick={handleClick}
      />
      <Quote 
        character={quote.character} 
        text={quote.text}
        image={quote.image}
      />
    </>
  );
};

export default SimpsonsQuotes;