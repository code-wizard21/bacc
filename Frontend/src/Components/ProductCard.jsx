import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product, id }) {

  return (
    <>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        border='none'
        w='100%'
      >
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          src={product.image}
          alt='Caffe Latte'
        />

        <Stack w='100%'>
          <CardBody textAlign='start'>
            <Heading size='md'>{product.name}</Heading>
            <Text py='2'>{product.location}</Text>
          </CardBody>

          <CardFooter justifyContent='space-between'>
            <Text fontSize='xl'>Price: <b>{product.price}</b></Text>
            <Link to={`/singleproduct/${id}`}>
              <Button variant='solid' colorScheme='blue'>
                Book Now
              </Button>
            </Link>
          </CardFooter>
        </Stack>

      </Card>
      <Divider orientation='horizontal' color='grey'/>
    </>
  );
}