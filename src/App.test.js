import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Daria Shchukina heading', () => {
  render(<App />);
  const headingElement = screen.getByRole('heading', { name: /Daria Shchukina/i, level: 1 });
  expect(headingElement).toBeInTheDocument();
});
