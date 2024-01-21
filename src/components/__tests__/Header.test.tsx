import { render } from '@testing-library/react';
import Header from '../Header/Header';
test('renders header text', () => {
  const { getByText } = render(<Header />);

  const headerElement = getByText(/Product List/i);
  expect(headerElement).toBeInTheDocument();
});
