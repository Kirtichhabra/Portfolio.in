import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Navbar', () => {
  render(<App />);
  const navbarElement = screen.getByText(/Home/i); // Assuming "Home" is in your Navbar
  expect(navbarElement).toBeInTheDocument();
});
