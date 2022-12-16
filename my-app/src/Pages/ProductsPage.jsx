import { AspectRatio, Box, Checkbox, Container, Divider, Heading, Hide, Input, Link, Stack, Text, Tooltip, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import PriceSlider from "../Components/PriceSlider";
import ProductCard from "../Components/ProductCard";
import SearchPanel from "../Components/SearchPanel";


export default function ProductsPage() {
    const [products, setproducts] = useState([])
    useEffect(() => {
        const FtchData = async () => {
            try {
                let res = await axios({
                    method: 'get',
                    url: `http://localhost:3000/products`,
                })
                //console.log(res)
                setproducts(res.data)
            } catch (error) {
                console.error(error)
            }
        }
        FtchData()
    }, [])

    return <Box px={10}>
        <SearchPanel />

        <Stack direction='row' spacing={4}>
            <Hide below='md'>
                <VStack w={{ sm: '0%', md: '30%' }} border='0px solid grey' align='flex-start'>

                    <Heading size='md'>Price</Heading>
                    <Container direction='row'><PriceSlider /></Container>
                    <Divider orientation='horizontal' />
                    <Heading size='md'>Traveller Experience</Heading>

                    <Checkbox size='lg'>
                        LGBTQ welcoming:
                    </Checkbox>
                    <Text paddingLeft={6} textAlign='start'>See properties that pledge to make all guests feel safe, welcome, and respected.</Text>

                    <Checkbox size='lg'>
                        Wheel-Chair Frendly:
                    </Checkbox>
                    <Text paddingLeft={6} textAlign='start'>See properties that pledge to make all guests feel safe, welcome, and respected.</Text>

                    <Checkbox size='lg'>
                        Family Frendly:
                    </Checkbox>
                    <Text paddingLeft={6} textAlign='start'>See properties that pledge to make all guests feel safe, welcome, and respected.</Text>

                </VStack>
            </Hide>

            <VStack w={{ base: '100%', sm: '100%', md: '70%' }} border='1px solid'>
                {products.map((product) =><ProductCard product={product}  key={product.id} id={product.id} /> )}
            </VStack>
        </Stack>


    </Box>

}