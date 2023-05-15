import { Heading, SimpleGrid } from '@chakra-ui/react';

import { ProductFilter } from '../components/ProductFilter';
import { Products } from '../components/Products';

export const ProductsPage = () => {
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
        <Products />
      </SimpleGrid>
    </>
  );
};
