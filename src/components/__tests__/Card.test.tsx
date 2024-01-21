import { render } from '@testing-library/react';
import Card from '../Card/Card';

test('renders product name and price', () => {
  const mockProduct = {
    name: 'Test Product',
    price: 19.99,
  };

  const { getByText } = render(<Card product={mockProduct} />);
  const nameElement = getByText(mockProduct.name);
  const priceElement = getByText(mockProduct.price.toFixed(2));
  expect(nameElement).toBeInTheDocument();
  expect(priceElement).toBeInTheDocument();
});

test('renders without crashing', () => {
  const { container } = render(<Card product={{ name: '', price: 0 }} />);
  expect(container).toBeDefined();
});
