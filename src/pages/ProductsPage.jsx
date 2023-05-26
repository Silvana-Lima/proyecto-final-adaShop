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

import { ProductCard } from '../components/ProductCard';
import { useDebounce } from '../hooks/useDebounce';
import { getproducts } from '../services/products';
import { filterProducts } from '../utils/filterProducts';

export const ProductsPage = () => {
  // States and functions
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
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

  // Get Cloud Firestore Products
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getproducts();
        setProducts(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  // Using useDebounce hook to get the filtered value with delay
  const debounceValue = useDebounce(filters);

  // Apply filters to products
  const leakedProducts = filterProducts(products, debounceValue);

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
              borderColor={'gray.300'}
              bg={'white'}
              placeholder="Ingresar nombre"
              onChange={(e) => handleFilters(e)}
            />
          </Box>
          <Box mb={5}>
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
          </Box>
          <Box>
            <FormLabel htmlFor="price">Precio Máximo</FormLabel>
            <Input
              type="number"
              name="price"
              borderColor={'gray.300'}
              bg={'white'}
              placeholder="Hasta"
              onChange={(e) => handleFilters(e)}
            />
          </Box>
        </FormControl>

        {loading && (
          <Flex justify={'center'} align={'center'} direction={'column'}>
            <Spinner size="lg" mb={5} />
            <Text fontWeight={'bold'}>Cargando productos</Text>
          </Flex>
        )}

        <SimpleGrid minChildWidth="270px" spacing="20px">
          {!loading &&
            leakedProducts &&
            leakedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          {!loading && !leakedProducts.length && (
            <Text>No se encontraron productos</Text>
          )}
          {error && <Text>Error al obtener los productos.</Text>}
        </SimpleGrid>
      </SimpleGrid>
    </>
  );
};
