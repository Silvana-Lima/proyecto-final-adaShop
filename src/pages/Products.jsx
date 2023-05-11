import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  SimpleGrid,
} from '@chakra-ui/react';

import { ProductCard } from '../components/ProductCard';

export const Products = () => {
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
            />
          </Box>
          <Box mb={5}>
            <FormLabel htmlFor="category">Categoria</FormLabel>
            <Select
              placeholder="Seleccionar"
              name="category"
              borderColor={'gray'}
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Box>
          <Box>
            <FormLabel htmlFor="price">Precio Máximo</FormLabel>
            <Input
              type="number"
              name="price"
              borderColor={'gray'}
              placeholder="Hasta"
            />
          </Box>
        </FormControl>
        <SimpleGrid
          columns={[1, 2, 2, 2, 3]}
          spacing={['20px', '10px', '40px']}
        >
          <ProductCard />
        </SimpleGrid>
      </SimpleGrid>
    </>
  );
};
