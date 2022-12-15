import React from "react"
import axios from 'axios'
import { Button, Stack, Icon, Input, InputGroup, InputLeftElement, InputRightElement, Tab, TabList, TabPanel, TabPanels, Tabs, useColorModeValue } from "@chakra-ui/react"
import Carousel from "../Components/Carousel"
import { ImLocation, ImCalendar } from 'react-icons/im'
import { CheckIcon } from "@chakra-ui/icons"
import Testimonials from "../Components/Testimonials"
import SearchPanel from "../Components/SearchPanel"

export default function HomePage() {
    const colors = useColorModeValue(
        ['red.50', 'teal.50', 'blue.50'],
        ['red.900', 'teal.900', 'blue.900'],
    )
    const [tabIndex, setTabIndex] = React.useState(0)
    const bg = colors[tabIndex]
    return (<>
        <Tabs onChange={(index) => setTabIndex(index)} bg={bg}>
            <TabList justifyContent={'center'}>
                <Tab>Stays</Tab>
                <Tab>Flights</Tab>
                <Tab>Cruises</Tab>
            </TabList>
            <SearchPanel/>
            {/* <Stack direction={{ base: 'column', md: 'row' }} spacing={4} align='center' padding={10}>
                <InputGroup>
                    <InputLeftElement
                        color='gray.400'
                        fontSize='1.2em'
                        children={<Icon as={ImLocation} />}
                    /><Input placeholder="Going to" />
                </InputGroup>
                <InputGroup>
                    <InputLeftElement
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
            <Button colorScheme='blue' size='lg'>
                Search
            </Button> */}

            <TabPanels p='2rem'>
                <TabPanel>The Primary Colors</TabPanel>
                <TabPanel>Are 1, 2, 3</TabPanel>
                <TabPanel>Red, yellow and blue.</TabPanel>
            </TabPanels>
        </Tabs>

        {/* <Carousel/> */}
        <Testimonials/>
        </>
    )

}
