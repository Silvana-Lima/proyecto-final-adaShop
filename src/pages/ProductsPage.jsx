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
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { ProductCard } from '../components/ProductCard';
import { useDebounce } from '../hooks/useDebounce';
import { getFilteredProducts } from '../services/products';

export const ProductsPage = () => {
  const { register, watch } = useForm();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const debounceValue = useDebounce({
    name: watch('name'),
    category: watch('category'),
    price: watch('price'),
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const leakedProducts = await getFilteredProducts(debounceValue);
        setProducts(leakedProducts);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [debounceValue]);

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
          <Heading as={'h3'} fontSize={['md', 'md']} mb={5}>
            Buscar por:
          </Heading>
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
              <option value="Todas">Todas</option>
              <option value="Smarthphones">Smarthphones</option>
              <option value="Televisores">Televisores</option>
              <option value="Electrodomésticos">Electrodomésticos</option>
              <option value="Portátiles">Portátiles</option>
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
        <SimpleGrid minChildWidth="300px" spacing="20px">
          {!loading &&
            products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          {!loading && !products.length && (
            <Text>No se encontraron productos</Text>
          )}
          {error && <Text>Error al obtener los productos.</Text>}
        </SimpleGrid>
      </SimpleGrid>
    </>
  );
};
