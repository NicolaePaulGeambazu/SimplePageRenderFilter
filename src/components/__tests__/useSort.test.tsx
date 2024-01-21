import { render, screen } from '@testing-library/react';
import useSort from '../customHooks/useSort';
import { act } from 'react-dom/test-utils';

describe('useSort hook', () => {
  const testData = [
    { name: 'Product A', price: 20 },
    { name: 'Product B', price: 15 },
    { name: 'Product C', price: 25 },
  ];

  it('should return unsorted products when allProducts is false', () => {
    let result;

    act(() => {
      render(
        <TestComponent
          callback={() => {
            result = useSort(testData, false);
          }}
        />
      );
    });

    expect(result).toEqual(testData);
  });

  it('should return top 5 sorted products when allProducts is true', () => {
    let result;

    act(() => {
      render(
        <TestComponent
          callback={() => {
            result = useSort(testData, true);
          }}
        />
      );
    });

    const expectedSortedProducts = [
      { name: 'Product B', price: 15 },
      { name: 'Product A', price: 20 },
      { name: 'Product C', price: 25 },
    ];

    expect(result).toEqual(expectedSortedProducts);
  });
});
const TestComponent = ({ callback }: { callback: () => void }) => {
  callback();
  return null;
};
