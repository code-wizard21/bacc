import { Box, Center, FormControl, FormHelperText, FormLabel, Heading, HStack, Image, Input, InputGroup, InputLeftAddon, Stack, Table, TableCaption, TableContainer, Tbody, Td, Text, Th, Thead, Tr, VStack } from "@chakra-ui/react";

export default function AdminPage() {
  return <div style={{'marginTop':'20px'}}>
  <Stack spacing={5} width='80%' margin='auto'>
    <Text>Reach the guests you want—those who truly value your property—with BA..e Group. Signing up is free, fast, and easy.</Text>
    <Stack spacing={4} border='1px solid' p={5} bg='yellow.100' borderRadius={10}>
      <Heading size='md'>What would you like to list?</Heading>
      <Stack direction={{base:'column',sm:'row'}} justifyContent='space-evenly' border='0px solid'>
        <VStack border='1px solid' padding={3} borderRadius={10}>
          <Image src='https://apps.expediapartnercentral.com/list/static/images/Lodging.svg'/>
          <Heading size='sm'>Lodging</Heading>
          <Text>A hotel, motel, or bed and breakfast</Text>
        </VStack>

        <VStack border='1px solid' padding={3} borderRadius={10}>
          <Image src="https://apps.expediapartnercentral.com/list/static/images/PrivateResidence.svg"/>
          <Heading size='sm'>Private residency</Heading>
          <Text>A private home,apartment,or vacation home</Text>
        </VStack>
      </Stack>
    </Stack>
    <Heading>Bring the right guests within reach</Heading>
    <Text>Connect with millions of people whose purpose, taste and budget make your property the perfect place to stay.</Text>
  </Stack>  

  <Box marginTop={7}>
    <FormControl w={{base:'80%',md:'40%'}} margin='auto'>
      <FormLabel>Admin ID</FormLabel>
      <Input type='number' placeholder="Enter Member ID here"/>
      <Input type='submit' bg='teal.400'/>
    </FormControl>
    </Box>
   


    <Heading>Details</Heading>
    <TableContainer>
      <Table variant='striped' colorScheme='teal'>
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>S.no</Th>
            <Th>Hotel id</Th>
            <Th>Room.no</Th>
            <Th>Traveller's Name</Th>
            <Th>Booking day</Th>
            <Th>Checkout day</Th>
            <Th>Payment Status</Th>
            <Th>Cancel Order</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td isNumeric>25.4</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  </div>
}