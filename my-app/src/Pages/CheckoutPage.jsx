import { Box, Heading, Input, Stack, Text, VStack } from "@chakra-ui/react";

export default function CheckoutPage(){
    return<div>
        <Stack direction='row' w='80%' border='1px solid' margin='auto'>
            <VStack>
                <Box>Yay! you just saved ----- on this booking!</Box>
                <Box textAlign='start'>
                    <Heading size='md'>Who's checking in?</Heading>
                    <Text>We will use these details to share your booking information</Text>
                    <Stack direction='row'>
                        <Input type='text' />
                        <Input type='email'/>
                    </Stack>
                </Box>
                <Box>Complete your booking</Box>
            </VStack>
            <Box>
                
            </Box>
        </Stack>
    </div>
}