import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';

import { ErrorAlert } from '../components/ErrorAlert';
import { ProductCard } from '../components/ProductCard';
import { SkeletonCard } from '../components/SkeletonCard';
import { useDataCloud } from '../hooks/useDataCloud';
import { useDebounce } from '../hooks/useDebounce';
import { getAllProducts } from '../services/products';
import { filterProducts } from '../utils/filterProducts';

export const ProductsPage = () => {
  // States, custom hooks and functions
  const { products, error, loading } = useDataCloud(getAllProducts());
  const [filters, setFilters] = useState({
    name: '',
    category: 'todas',
    price: 0,
  });

  // Function to handle changes in filters
  const handleFilters = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  // Using useDebounce hook to get the filtered value with delay
  const debounceValue = useDebounce(filters);

  // Apply filters to products
  const leakedProducts = filterProducts(products, debounceValue);

  return (
    <>
      <SimpleGrid
        columns={[1, 1, 1, 2]}
        templateColumns={['1fr', '2fr', '1fr 2fr', '1fr 4fr']}
        spacing={['10px', '10px', '30px']}
        m={3}
      >
        <Box>
          <Heading
            as={'h2'}
            fontSize={['2xl', '3xl']}
            textAlign={'left'}
            mb={[3, 5]}
          >
            Productos
          </Heading>
          <FormControl mb={[3, 5]}>
            <FormLabel htmlFor="name">Nombre</FormLabel>
            <Input
              type="text"
              name="name"
              borderColor={'gray.300'}
              bg={'white'}
              placeholder="Ingresar nombre"
              onChange={(e) => handleFilters(e)}
            />
          </FormControl>
          <FormControl mb={[3, 5]}>
            <FormLabel htmlFor="category">Categoria</FormLabel>
            <Select
              name="category"
              borderColor={'gray.300'}
              bg={'white'}
              onChange={(e) => handleFilters(e)}
            >
              <option value="todas">Todas</option>
              <option value="smarthphones">Smarthphones</option>
              <option value="televisores">Televisores</option>
              <option value="electrodomésticos">Electrodomésticos</option>
              <option value="portátiles">Portátiles</option>
            </Select>
          </FormControl>
          <FormControl mb={5}>
            <FormLabel htmlFor="price">Precio Máximo</FormLabel>
            <Input
              type="number"
              name="price"
              borderColor={'gray.300'}
              bg={'white'}
              placeholder="Hasta"
              onChange={(e) => handleFilters(e)}
            />
          </FormControl>
        </Box>
        {loading && (
          <SimpleGrid
            minChildWidth="270px"
            spacing="20px"
            justifyItems={'center'}
          >
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </SimpleGrid>
        )}
        <SimpleGrid
          minChildWidth="270px"
          justifyItems={'center'}
          spacing="20px"
        >
          {!loading &&
            leakedProducts &&
            leakedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}

          {!loading && !leakedProducts.length && !error && (
            <Text>No se encontraron productos</Text>
          )}

          {error && (
            <Flex h={20} w={'100%'}>
              <ErrorAlert
                message={'Se produjo un error al obtener los productos'}
              />
            </Flex>
          )}
        </SimpleGrid>
      </SimpleGrid>
    </>
  );
};
