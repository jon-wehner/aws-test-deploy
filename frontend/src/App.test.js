import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders the changed test', () => {
  render(<App />);
  const text = screen.getByText(/changed/i);
  expect(text).toBeInTheDocument();
});
