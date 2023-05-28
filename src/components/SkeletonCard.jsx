import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Skeleton,
  SkeletonText,
  Stack,
} from '@chakra-ui/react';

export const SkeletonCard = () => {
  return (
    <Card maxW="xs">
      <CardBody>
        <Skeleton>
          <Box h={160} w={240} />
        </Skeleton>

        <Stack mt="6" spacing="3">
          <SkeletonText noOfLines={2} spacing="4" skeletonHeight="8" />
        </Stack>
      </CardBody>

      <CardFooter>
        <ButtonGroup spacing="2">
          <Skeleton>
            <Button>Ver Detalles</Button>
          </Skeleton>

          <Skeleton>
            <Button>Añadir</Button>
          </Skeleton>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
