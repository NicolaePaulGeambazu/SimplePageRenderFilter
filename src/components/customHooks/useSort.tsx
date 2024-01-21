import { useState, useEffect } from 'react';

interface Product {
  name: string;
  price: number;
}

const useSort = (data: Product[], allProducts: boolean) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (!allProducts) {
      setProducts(data);
    } else {
      const sortedProducts = [...data].sort((a, b) => a.price - b.price);
      setProducts(sortedProducts.slice(0, 5));
    }
  }, [data, allProducts]);

  return products;
};

export default useSort;
