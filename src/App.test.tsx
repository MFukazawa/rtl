import React from 'react';
import axios from 'axios'
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
// import sum from './math'

import App from './App';

// const mockedAxios = axios as jest.Mocked<typeof axios>;
jest.mock('axios')

describe('App', () => {
  test('fetches stories from an API and displays them', async () => {
    const stories = [
      { objectID: '1', title: 'Hello' },
      { objectID: '2', title: 'React' },
    ];

    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: { hits: stories } })
    );

    render(<App />);

    await userEvent.click(screen.getByRole('button'));

    const items = await screen.findAllByRole('listitem');

    expect(items).toHaveLength(2);
  });
});

// describe('sum', () => {
//   test('sums up two values', () => {
//     expect(sum(2, 4)).toBe(6);
//   })
// })

// describe('App', () => {
//   test('renders App component', () => {
//     render(<App />)

//     screen.debug();
//     // expect(screen.getByRole('textbox')).toBeInTheDocument()

//     fireEvent.change(screen.getByRole('textbox'), {
//       target: { value: 'JavaScript' }
//     })
//   })
// })

// test('render textbox', () => {
//   render(<App/>)
//   expect(screen.getByRole('textbox')).toBeInTheDocument()
// })

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test('renders search text', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Searches for/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test('check div that does not exist', () => {
//   render(<App/>)
//   expect(screen.queryByText(/This shouldn't exist/)).toBeNull()
// })

// describe('Async', () => {
//   test('renders App component', async () => {
//     render(<App/>)

//     expect(screen.queryByText(/Signed in as/)).toBeNull();

//     expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();
//   })
// })