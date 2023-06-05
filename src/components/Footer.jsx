import {
  Box,
  Flex,
  HStack,
  Image,
  Link,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { MdOutlineCopyright } from 'react-icons/md';
import { Link as LinkRoute } from 'react-router-dom';

export const Footer = () => {
  return (
    <Flex
      bg={'teal.300'}
      p={5}
      fontSize={['sm', 'md']}
      justify={'center'}
      gap={[15, 20]}
    >
      <VStack>
        <Stack as={LinkRoute} to={'/'}>
          <Image
            src="/AdaShopLogo.png"
            h={['60px', '80px']}
            alt="Logo Adashop"
          />
        </Stack>

        <HStack>
          <MdOutlineCopyright />{' '}
          <Text fontSize={['11px', '14px']}>2023 Ada Ecommerce.</Text>
        </HStack>
      </VStack>

      <HStack gap={3}>
        <Box
          as={Link}
          p={3}
          bg={'orange.400'}
          borderRadius={'50%'}
          href="https://www.facebook.com/"
          target="_blank"
          aria-label="Enlace a Facebook"
          _hover={{ bg: 'teal.500' }}
        >
          <BsFacebook fontSize={25} />
        </Box>

        <Box
          as={Link}
          p={3}
          bg={'orange.400'}
          borderRadius={'50%'}
          href="https://www.instagram.com/"
          target="_blank"
          aria-label="Enlace a Instagram"
          _hover={{ bg: 'teal.500' }}
        >
          <BsInstagram fontSize={25} />
        </Box>

        <Box
          as={Link}
          p={3}
          bg={'orange.400'}
          borderRadius={'50%'}
          href="https://www.whatsapp.com/"
          target="_blank"
          aria-label="Enlace a whatsapp"
          _hover={{ bg: 'teal.500' }}
        >
          <BsWhatsapp fontSize={25} />
        </Box>
      </HStack>
    </Flex>
  );
};
