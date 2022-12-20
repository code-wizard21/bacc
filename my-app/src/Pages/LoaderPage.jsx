import { Box, Center, Spinner, Heading, VStack, Text, Flex, Button, useToast, HStack } from "@chakra-ui/react";
import { useState } from "react";
import { CloseIcon } from '@chakra-ui/icons';
import Alert from "../Components/Alert";
import {Link} from 'react-router-dom'

function PaymentFailed(){
    return(
    <Box textAlign="center" py={10} px={6}>
      <Box display="inline-block">
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          bg={'red.500'}
          rounded={'50px'}
          w={'55px'}
          h={'55px'}
          textAlign="center">
          <CloseIcon boxSize={'20px'} color={'white'} />
        </Flex>
      </Box>
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Oops...
      </Heading>
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Seems something went wrong.
      </Heading>
      <Text color={'gray.500'} fontSize='xl'>
        Kindly retry again.
      </Text>
      <HStack justifyContent='space-evenly' marginTop={6}>
      <Link to='/payment'><Button colorScheme='blue'>Go Back</Button></Link>
      <Link to='/'><Button colorScheme='blue'>Go Home</Button></Link>
      </HStack>
    </Box>
  );
}

function Loader(){
    return(
        <VStack spacing={5}>
                <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                />
                <Heading>Just hang on...</Heading>
                <Heading>We are almost done</Heading>
            </VStack>
    )
}

export default function LoaderPage() {
    
    let [flag,setflag]=useState(false)
    const toast = useToast()
    let alertdata={
        title: ' Payment Declined',
        description: "Bank server is not responding",
        status: 'error',
      }

    setTimeout(() => {
        setflag(true)
        toast(Alert(alertdata))
        }, 5000)
    
    return <>
        <Center h='800px'>
            {flag?<PaymentFailed/>:<Loader/>}           
        </Center>

        
    </>
}