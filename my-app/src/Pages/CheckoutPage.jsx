import { Box, Button, Center, Divider, Heading, HStack, Input, Stack, Text, useToast, VStack } from "@chakra-ui/react";
import { useNavigate,useParams } from "react-router-dom";
import React from 'react'
import Alert from "../Components/Alert";

export default function CheckoutPage(){
    let initialdetails={
        fullname:null,
        email:null,
    }
    const toast = useToast()
    let alertdata={
        title: ' Invalid Input',
        description: "Please check the input again",
        status: 'warning',
      }

    const [detail,setdetail]=React.useState(initialdetails)
    //console.log(detail)
    const navigate=useNavigate();

    const handlebooking=()=>{
        if(detail.fullname==null||detail.email==null) toast(Alert(alertdata))
        else navigate('/payment')
    }

    const handleChange=(el)=>{
        //console.log(el.target.name,el.target.value)
        setdetail({...detail,[el.target.name]:el.target.value})
    }

  let bookdata=JSON.parse(localStorage.getItem('booking'))
  let totalprice=bookdata.price*bookdata.travellers;
  let discount=totalprice*(5/100);
  let couponadd=400;
  let payableamount=totalprice-discount-couponadd;
    return<div>
        <Stack direction={{base:'column',md:'row'}} w='80%' border='0px solid' margin='auto'marginTop='5%' marginBottom='5%'>
            <VStack border='1px solid grey' w={{base:'100%',md:'60%'}} p={3} spacing={3}>
                <Text border='0px solid'>Yay! you just saved {discount+couponadd} on this booking!</Text>
                <Box textAlign='start'>
                    <Heading size='md'>Who's checking in?</Heading>
                    <Text>We will use these details to share your booking information</Text>
                    <Stack direction='row'>
                        <Input type='text' placeholder="Full Name" name='fullname' onChange={handleChange}/>
                        <Input type='email' placeholder="Email" name='email' onChange={handleChange}/>
                    </Stack>
                </Box>
                <Button bg='teal.400'onClick={handlebooking}>Complete your booking</Button>
            </VStack>
    
            <Box border='1px solid grey' w={{base:'100%',md:'40%'}} p={3}>
               <Heading size='md' textAlign='start'>{bookdata.hotel}</Heading>
               <HStack justifyContent='space-between'>
               <Text>{bookdata.checkin} to {bookdata.checkout}</Text>
               <Text>{bookdata.rooms} Rooms | {bookdata.travellers} Guests</Text>
               </HStack>
               <Divider />
               <Box>
                    <HStack justifyContent='space-around'>
                        <Text>Total Amount</Text>
                        <Heading size='md'>{totalprice}</Heading>
                    </HStack>
                    <HStack justifyContent='space-around'>
                        <Text>Price Drop</Text>
                        <Heading size='md'>-{discount}</Heading>
                    </HStack>
                    <HStack justifyContent='space-around'>
                        <Text>Discount  </Text>
                        <Heading size='md'>-{couponadd}</Heading>
                    </HStack>
                </Box>    
                <Divider></Divider>
                <HStack justifyContent='space-around'>
                    <Text>Payable Amount</Text>
                    <Heading size='md'>{payableamount}</Heading>
                </HStack>
                
            </Box>
        </Stack>
    </div>
}