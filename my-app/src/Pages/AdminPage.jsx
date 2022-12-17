import { Box, Heading, HStack, Stack, Table, TableCaption, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";

export default function AdminPage(){
    return<>
    <Text>Reach the guests you want—those who truly value your property—with Expedia Group. Signing up is free, fast, and easy.</Text>
    <Stack>
        <Heading size='md'>What would you like to list?</Heading>
        <HStack justifyContent='space-around'>
            <Box border='1px solid'>
                <Heading size='sm'>Lodging</Heading>
                <Text>A hotel, motel, or bed and breakfast</Text></Box>
            <Box border='1px solid'>
                <Heading size='sm'>Private residency</Heading>
                <Text>A private home,apartment,or vacation home</Text>
            </Box>
        </HStack>
    </Stack>
    <Heading>Bring the right guests within reach</Heading>
    <Text>Connect with millions of people whose purpose, taste and budget make your property the perfect place to stay.</Text>
    
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
    </>
}