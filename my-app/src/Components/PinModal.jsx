import { Button, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, PinInput, PinInputField, Text } from "@chakra-ui/react";

export default function PinModal(prop){
    let {handlePin,isOpen,onClose,device,isVerify}=prop;
    let handleComplete=(el)=>{
        //console.log(el)
        isVerify(el)
    }
    return<>
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
            <ModalOverlay
                bg='blackAlpha.300'
                backdropFilter='blur(10px) hue-rotate(90deg)' />
            <ModalContent>
                <ModalHeader>Enter the OTP</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <HStack>
                        <PinInput otp size='lg' onComplete={handleComplete}>
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                        </PinInput>
                    </HStack>
                    <Text marginTop={2} >An One Time Password has been send to your registered {device}.</Text>
                </ModalBody>

                <ModalFooter>
                    <Button onClick={handlePin} colorScheme='blue'>Okay</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </>
}