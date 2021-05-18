import React from 'react';
import { render } from 'react-dom';
import { SimpsonsQuotes } from './SimpsonsQuotes';

describe('SimpsonsQuotes container', () => {
  it('displays a simpson character and quote', async () => {
    render(<SimpsonsQuotes />);
    screen.getByText('Quote');

  });
});