import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import styles from './CSS/ProductCard.module.css'

export default function ProductCard({ product, id }) {
// console.log(product)
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
            <HStack className={styles.amenities}>
            {product.amenities.map((each,index)=><Heading key={index} size={'xs'}>{each}</Heading>)}
            </HStack>
          </CardBody>

          <CardFooter justifyContent='space-between'>
            <Text fontSize={{base:'md',lg:'xl'}}>Price: ₹ <b>{product.price}</b></Text>
            <Link to={`/singleproduct/${id}`}>
              <Button variant='solid' colorScheme='blue' size={{base:'xs',md:'sm',lg:'lg'}}>
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