import { Box, FormControl, FormLabel, Input, Select } from '@chakra-ui/react';

export const ProductFilter = () => {
  return (
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
        <Select placeholder="Seleccionar" name="category" borderColor={'gray'}>
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
  );
};
