import { Stack, VStack } from "@chakra-ui/react";
import ProductCard from "../Components/ProductCard";
import SearchPanel from "../Components/SearchPanel";

export default function ProductsPage(){
    return<>
    <SearchPanel/>
    {/* <ProductCard/> */}
    <Stack direction='row' spacing={1}>
    <VStack w={{sm:'0%',md:'30%'}} border='1px solid red'>

    </VStack>
    <VStack w={{base:'100%',sm:'100%',md:'70%'}} border='1px solid'>

    </VStack>
    </Stack>

    </>
}