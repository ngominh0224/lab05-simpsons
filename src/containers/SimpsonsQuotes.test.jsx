import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import SimpsonsQuotes from './SimpsonsQuotes';

const server = setupServer(
  rest.get('https://thesimpsonsquoteapi.glitch.me/quotes', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          quote:
            "Can't we have one meeting that doesn't end with us digging up a corpse?",
          character: 'Mayor Quimby',
          image:
            'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMayorQuimby.png?1497627527799',
        },
      ])
    );
  })
);

describe('Simpsons Quote Generator tests', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('renders a button to fetch a quote and displays it', async () => {
    render(<SimpsonsQuotes />);

    const button = screen.getByRole('button');

    fireEvent.click(button);

    return waitFor(() => {
      screen.getByAltText('Mayor Quimby');
      screen.getByText(
        "Can't we have one meeting that doesn't end with us digging up a corpse?"
      );
    });
  });
});
