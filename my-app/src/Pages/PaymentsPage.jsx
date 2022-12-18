import { TabList, TabPanel, TabPanels, Tabs, Tab, useColorModeValue, Heading, Text, Input, Box, HStack, VStack, Button, useDisclosure, ModalOverlay, Modal, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, PinInputField, PinInput } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import PinVerificationModal from '../Components/PinVerificationModal'



export default function PaymentsPage() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    //console.log(useNavigate)
    const navigate = useNavigate();
    //console.log(navigate)

    const colors = useColorModeValue(
        ['red.50', 'teal.50', 'blue.50'],
        ['red.900', 'teal.900', 'blue.900'],
    )
    const [tabIndex, setTabIndex] = useState(0)
    const bg = colors[tabIndex]

    const handlePayment = () => {
        onOpen()
    }

    const handlePin=()=>{
        onClose();
        navigate('/loader')
    }


    return <div style={{ 'margin': '5%' }}>
        <Tabs isFitted variant='solid-rounded' onChange={(index) => setTabIndex(index)} bg={bg} orientation='horizontal' w='80%' margin='auto'>
            <TabList mb='1em'>
                <Tab>Cash on Delivery</Tab>
                <Tab>UPI ( GooglePay / PhonePay / BHIM )</Tab>
                <Tab>Debit/Credit Card</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <Heading size='md'>Pay on delivery (Cash/UPI)</Heading>
                    <VStack>
                        <Text>Capcha</Text>
                        <Text border='1px solid' padding='2%' as='s'>{Math.floor(Math.random() * 10000)}</Text>
                        <Input placeholder="Enter code shown in above image" w='auto' />
                    </VStack>
                    <Text textAlign='start' >You can pay via Cash or UPI enabled app at the time of delivery. Ask your delivery executive for these options.</Text>
                    <Button bg='red.500' onClick={handlePayment}>PLACE ORDER</Button>                </TabPanel>
                <TabPanel>
                    <Heading size='md'>UPI ID</Heading>
                    <Input placeholder="Enter your UPI ID here" />
                    <Button bg='red.500' onClick={handlePayment}>PLACE ORDER</Button>                </TabPanel>
                <TabPanel>
                    <Heading size='md'>CREDIT/DEBIT CARD</Heading>
                    <Text>Please ensure your card can be used for online transactions.</Text>
                    <VStack w='20em' margin='auto'>
                        <Input placeholder="Card Number" type='number' />
                        <Input placeholder="Name on Card" type='text' />
                        <HStack>
                            <Input placeholder="Valid Thru(MM/YY)" />
                            <Input placeholder="CVV" type='number' />
                        </HStack>
                    </VStack>
                    <Button bg='red.500' onClick={handlePayment}>PLACE ORDER</Button>
                </TabPanel>
            </TabPanels>
        </Tabs>

        <Modal isCentered isOpen={isOpen} onClose={onClose}>
            <ModalOverlay
                bg='blackAlpha.300'
                backdropFilter='blur(10px) hue-rotate(90deg)' />
            <ModalContent>
                <ModalHeader>Enter the OTP</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <HStack>
                        <PinInput otp size='lg'>
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                        </PinInput>
                    </HStack>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={handlePin} colorScheme='blue'>Okay</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </div>
}