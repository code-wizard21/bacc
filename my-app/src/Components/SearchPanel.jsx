import { Button, Stack, Icon, Input, InputGroup, InputLeftElement, InputRightElement, Tab, TabList, TabPanel, TabPanels, Tabs, useColorModeValue } from "@chakra-ui/react"
import { ImLocation, ImCalendar } from 'react-icons/im'
import { Link } from "react-router-dom"


export default function SearchPanel() {
    return <div>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={4} align='center' padding={10}>
            <InputGroup>
                <InputLeftElement
                    color='gray.400'
                    fontSize='1.2em'
                    children={<Icon as={ImLocation} />}
                /><Input placeholder="Going to"/>
            </InputGroup>

            <InputGroup>
                <InputRightElement
                    color='gray.400'
                    fontSize='1.2em'
                    children={<Icon as={ImCalendar} />}
                />
                <Input
                    placeholder="Check In"
                    size="md"
                    type="text"
                    onFocus={(el) => el.target.type = 'date'}
                />
            </InputGroup>

            <InputGroup>
                <InputLeftElement
                    color='gray.400'
                    fontSize='1.2em'
                    children={<Icon as={ImCalendar} />}
                />
                <Input
                    placeholder="Check Out"
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