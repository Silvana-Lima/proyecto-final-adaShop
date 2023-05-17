import { Heading, SimpleGrid } from '@chakra-ui/react';

import { ProductCard } from '../components/ProductCard';
import { ProductFilter } from '../components/ProductFilter';

export const ProductsPage = ({ allProducts }) => {
  console.log(allProducts);
  return (
    <>
      <Heading as={'h2'} fontSize={['2xl', '3xl']}>
        Productos
      </Heading>
      <SimpleGrid
        columns={[1, 1, 1, 2]}
        templateColumns={['1fr', '1fr', '1fr 4fr']}
        spacing={['10px', '10px', '30px', '50px']}
      >
        <ProductFilter />
        <SimpleGrid columns={[1, 3, 3]} spacing={['20px', '10px', '40px']}>
          {allProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </SimpleGrid>
      </SimpleGrid>
    </>
  );
};
