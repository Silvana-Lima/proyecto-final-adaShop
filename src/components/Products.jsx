import { SimpleGrid } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { getproducts } from '../services/products';
import { ProductCard } from './ProductCard';

export const Products = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getproducts();

      setAllProducts(data);
    };

    getData();
  }, []);

  console.log(allProducts);

  return (
    <>
      <SimpleGrid columns={[1, 3, 3]} spacing={['20px', '10px', '40px']}>
        {allProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </SimpleGrid>
    </>
  );
};
