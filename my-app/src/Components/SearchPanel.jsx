import { Button, Stack, Icon, Input, InputGroup, InputLeftElement, InputRightElement, Tab, TabList, TabPanel, TabPanels, Tabs, useColorModeValue, InputLeftAddon, Box } from "@chakra-ui/react"
import { ImLocation, ImCalendar } from 'react-icons/im'
import { Link } from "react-router-dom"
import DatalistInput from 'react-datalist-input';
import 'react-datalist-input/dist/styles.css';


export default function SearchPanel() {
    return <div style={{'margin':'2%'}}>
        <Box marginTop='2%'>
        <InputGroup w='40em' margin='auto'>
            <InputLeftAddon>Going to</InputLeftAddon>
            <DatalistInput
                placeholder="Enter the destination"
                onSelect={(item) => console.log(item.value)}
                items={[
                { id: 'Delhi', value: 'Delhi' },
                { id: 'Jaipur', value: 'Jaipur' },
                { id: 'Mumbai', value: 'Mumbai' },
                { id: 'Banglore', value: 'Banglore' },
                { id: 'Kolkata', value: 'Kolkata' },
                ]}
            />
            </InputGroup>
            </Box>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={4} align='center' padding={10}>
            {/* <InputGroup>
                <InputLeftElement
                    color='gray.400'
                    fontSize='1.2em'
                    children={<Icon as={ImLocation} />}
                />              
                <Input placeholder="Going to"/>
            </InputGroup> */}
            
            <InputGroup>
            <InputLeftAddon>Check In:</InputLeftAddon>
                <Input
                    placeholder="Enter the date here"
                    size="md"
                    type="text"
                    onFocus={(el) => el.target.type = 'date'}
                />
            </InputGroup>

            <InputGroup>
            <InputLeftAddon>Check Out:</InputLeftAddon>
                <Input
                    placeholder="Enter the date here"
                    size="md"
                    type="text"
                    onFocus={(el) => el.target.type = 'date'}
                />
            </InputGroup>
        </Stack>
        <Link to='/products'>
            <Button colorScheme='blue' size='lg'>
                Search
            </Button>
        </Link >
    </div>
}