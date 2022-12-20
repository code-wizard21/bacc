import { Box, Heading, Text } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

export default function SuccessPayment() {
  return (
    <Box textAlign="center" py={10} px={6} margin='100px 0px'>
      <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Booking Confirm
      </Heading>
      <Text color={'gray.500'}>
        Booking Details has been send to your email address.
      </Text>
    </Box>
  );
}