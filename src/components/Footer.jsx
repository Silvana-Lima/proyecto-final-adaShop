import {
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
          <Image src="/AdaShopLogo.png" h={['40px', '80px']} />
        </Stack>

        <HStack>
          <MdOutlineCopyright /> <Text>2023 Ada Ecommerce.</Text>
        </HStack>
      </VStack>

      <HStack>
        <Link p={3}>
          <BsFacebook fontSize={20} />
        </Link>

        <Link p={3}>
          <BsInstagram fontSize={20} />
        </Link>

        <Link p={3}>
          <BsWhatsapp fontSize={20} />
        </Link>
      </HStack>
    </Flex>
  );
};
