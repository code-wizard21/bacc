import { TabList, TabPanel, TabPanels, Tabs, Tab, useColorModeValue, Heading, Text, Input, Box, HStack, VStack, Button } from "@chakra-ui/react";
import { useState } from "react";

export default function PaymentsPage() {
    const colors = useColorModeValue(
        ['red.50', 'teal.50', 'blue.50'],
        ['red.900', 'teal.900', 'blue.900'],
    )
    const [tabIndex, setTabIndex] = useState(0)
    const bg = colors[tabIndex]
    return <div>
        <Tabs isFitted variant='solid-rounded' onChange={(index) => setTabIndex(index)} bg={bg} orientation='horizontal' w='70%' margin='auto'>
            <TabList mb='1em'>
                <Tab>Cash on Delivery</Tab>
                <Tab>UPI ( GooglePay / PhonePay / BHIM )</Tab>
                <Tab>Debit/Credit Card</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <Heading size='md'>Pay on delivery (Cash/UPI)</Heading>
                    <Box w='40%' margin='auto'>
                        <Text>Capcha:</Text>
                        <Text as='s'>{Math.floor(Math.random()*10000)}</Text>
                        <Input placeholder="Enter code shown in above image"/>
                    </Box>
                    <Text textAlign='start' >You can pay via Cash or UPI enabled app at the time of delivery. Ask your delivery executive for these options.</Text>
                    <Button bg='red'>PLACE ORDER</Button>
                </TabPanel>
                <TabPanel>
                    <Heading size='md'>UPI ID</Heading>
                    <Input placeholder="Enter your UPI ID here"/>
                    <Button bg='red'>PLACE ORDER</Button>
                </TabPanel>
                <TabPanel>
                    <Heading size='md'>CREDIT/DEBIT CARD</Heading>
                    <Text>Please ensure your card can be used for online transactions.</Text>
                    <VStack w='20em' margin='auto'>
                        <Input placeholder="Card Number" type='number' />
                        <Input placeholder="Name on Card" type='text' />
                        <HStack>
                            <Input placeholder="Valid Thru(MM/YY)"/>
                            <Input placeholder="CVV" type='number'/>
                        </HStack>
                    </VStack>
                    <Button bg='red.500'>PAY NOW</Button>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </div>
}