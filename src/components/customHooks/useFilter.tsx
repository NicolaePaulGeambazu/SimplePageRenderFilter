import { useState, useMemo } from 'react';

interface DataItem {
  name: string;
  price: number;
}

const useFilter = (data: DataItem[]) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = useMemo(() => {
    if (!searchTerm) {
      return data;
    }
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    return data.filter((product) =>
      product.name.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }, [data, searchTerm]);

  return { filteredData, setSearchTerm };
};

export default useFilter;
