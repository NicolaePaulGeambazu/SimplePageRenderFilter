import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import useFilter from '../customHooks/useFilter';

interface TestComponentProps {
  data: Array<{ name: string; price: number }>;
}

const TestComponent: React.FC<TestComponentProps> = ({ data }) => {
  const { filteredData, setSearchTerm } = useFilter(data);

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredData.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

test('useFilter hook › filters data based on search term', async () => {
  const data = [
    { name: 'Apple', price: 1 },
    { name: 'Banana', price: 2 },
  ];

  render(<TestComponent data={data} />);
  const inputElement = screen.getByPlaceholderText('Search');
  fireEvent.change(inputElement, { target: { value: 'Ban' } });
  await waitFor(() => {
    expect(screen.queryByText('Apple')).not.toBeInTheDocument();
    expect(screen.getByText('Banana')).toBeInTheDocument();
  });
});
