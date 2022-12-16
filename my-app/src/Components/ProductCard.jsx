import {
    Badge,
    Button,
    Card,
    CardBody,
    CardFooter,
    Center,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { Link, useParams } from 'react-router-dom';
  
  export default function ProductCard({product,id}) {
    //const {id}=useParams();
    console.log(product)
    return (
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
      >
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          src={product.image}
          alt='Caffe Latte'
        />

        <Stack>
          <CardBody textAlign='start'>
            <Heading size='md'>{product.name}</Heading>

            <Text py='2'>
              Caffè latte is a coffee beverage of Italian origin made with espresso
              and steamed milk.
            </Text>
          </CardBody>

          <CardFooter>
            <Link to={`/singleproduct/${id}`}>
            <Button variant='solid' colorScheme='blue'>
              Book Now
            </Button>
            </Link>
          </CardFooter>
        </Stack>
      </Card>
    );
  }