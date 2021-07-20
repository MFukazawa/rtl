import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import sum from './math'

describe('sum', () => {
  test('sums up two values', () => {
    expect(sum(2, 4)).toBe(6);
  })
})

describe('App', () => {
  test('renders App component', () => {
    render(<App />)

    screen.debug();
  })
})

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders search text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Searches for/i);
  expect(linkElement).toBeInTheDocument();
});
