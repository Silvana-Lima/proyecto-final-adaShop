import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  SimpleGrid,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import { ProductCard } from '../components/ProductCard';
import { filterProducts } from '../utils/filterProducts';

export const ProductsPage = ({ allProducts, loading }) => {
  const { register, watch } = useForm();

  const nameWatch = watch('name');
  const categoryWatch = watch('category');
  const priceWatch = watch('price');

  const products = filterProducts(
    allProducts,
    nameWatch,
    categoryWatch,
    priceWatch
  );

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
        <FormControl pb={10} pt={5}>
          <Box mb={5}>
            <FormLabel htmlFor="name">Nombre</FormLabel>
            <Input
              type="text"
              name="name"
              borderColor={'gray'}
              placeholder="Ingresar nombre"
              {...register('name')}
            />
          </Box>
          <Box mb={5}>
            <FormLabel htmlFor="category">Categoria</FormLabel>
            <Select
              name="category"
              borderColor={'gray'}
              {...register('category')}
            >
              <option value="todas">Todas</option>
              <option value="smarthphones">Smarthphones</option>
              <option value="televisores">Televisores</option>
              <option value="electrodomésticos">Electrodomésticos</option>
              <option value="portátiles">Portátiles</option>
            </Select>
          </Box>
          <Box>
            <FormLabel htmlFor="price">Precio Máximo</FormLabel>
            <Input
              type="number"
              name="price"
              borderColor={'gray'}
              placeholder="Hasta"
              {...register('price')}
            />
          </Box>
        </FormControl>
        {loading && (
          <Flex justify={'center'} align={'center'} direction={'column'}>
            <Spinner size="lg" mb={5} />
            <Text fontWeight={'bold'}>Cargando productos</Text>
          </Flex>
        )}
        <SimpleGrid columns={[1, 3, 3]} spacing={['20px', '10px', '40px']}>
          {!loading &&
            products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          {!loading && !products.length && (
            <Text>No se encontraron productos</Text>
          )}
        </SimpleGrid>
      </SimpleGrid>
    </>
  );
};
