import React from "react"
import axios from 'axios'
import {Tab, TabList, Tabs, useColorModeValue, Image, Box, TabPanel, TabPanels } from "@chakra-ui/react"
import Testimonials from "../Components/Testimonials"
import SearchPanel from "../Components/SearchPanel"

export default function HomePage() {
    const colors = useColorModeValue(
        ['teal.50', 'red.50', 'blue.50'],
        ['teal.900', 'red.900', 'blue.900'],
    )
    const [tabIndex, setTabIndex] = React.useState(0)
    const bg = colors[tabIndex]
    return (<>
        <Box border='0px solid'>
        <Image objectFit='cover' h='300px' w='100%' src="https://forever.travel-assets.com/flex/flexmanager/images/2022/03/31/ORB_LGBTQ_TravelAsYouAre_lpheroB_1680x945_20220228.jpg?impolicy=fcrop&w=900&h=506&q=mediumHigh"/>
        </Box>
        <Tabs onChange={(index) => setTabIndex(index)} bg={bg} border='0px solid' marginY={5}>
            <TabList justifyContent={'center'} border='0px solid'>
                <Tab>Stays</Tab>
                <Tab>Flights</Tab>
                <Tab>Cruises</Tab>
            </TabList>
            <TabPanels>
            <TabPanel><SearchPanel/></TabPanel> 
            <TabPanel p={'90px'}>Will be available soon</TabPanel>
            <TabPanel p={'90px'}>Will be available soon</TabPanel>   
            </TabPanels>     
        </Tabs>
        <Image src="https://forever.travel-assets.com/flex/flexmanager/images/2022/03/31/ORB_LGBTQ_StayWhere_lpadB_1680x350_20220222.jpg"/>
        <Testimonials/>
        </>
    )

}
