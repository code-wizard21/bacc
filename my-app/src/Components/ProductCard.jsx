import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  Center,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link, useParams } from 'react-router-dom';

export default function ProductCard({ product, id }) {
  //const {id}=useParams();
  //console.log(product)
  return (
    <>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        // cursor='pointer'
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
            <Text fontSize='xl'>Price: <b>{product.price}</b>/individual</Text>
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