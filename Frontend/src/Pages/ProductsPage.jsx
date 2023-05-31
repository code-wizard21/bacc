import {
  Box,
  Button,
  HStack,
  Hide,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ProductCard from "../Components/ProductCard";
import {SearchPanel} from "../Components/SearchPanel";
import { useLocation, useSearchParams } from "react-router-dom";
import { SidePanel } from "../Components/SidePanel";
import { ProductSkeleton } from "../Components/ProductSkeleton";

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [products, setproducts] = useState([]);
  const [price, setprice] = useState(searchParams.get('price'));
  const [sort, setSort] = useState(searchParams.get('sort'));

  const handleSorting = (str) => {
    setSort(str);
  };

  let bookingdata = JSON.parse(localStorage.getItem("booking"));


//------------------- useEffect for setting the URL-----------------------------  
  useEffect(() => {
    let newParams = { destination: bookingdata.destination };
    price && (newParams.price = price);
    sort && (newParams.sort = sort);
    setSearchParams(newParams);
  }, [price, sort ,bookingdata.destination]);

//------------- useEffect for making api calls using URL parameters--------------  
  useEffect(() => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_URL}/products`,
      headers: {
        destination: searchParams.get("destination") || bookingdata.destination,
        price: searchParams.get("price") || "",
        sort: searchParams.get("sort") || "",
      },
    })
      .then((res) => {
        setproducts(res.data);
        // console.log(res.data)
      })
      .catch((err) => console.log(err));
  }, [location.search]);

  return (
    <Box px={10}>

      <SearchPanel />

      <HStack
        justifyContent={"space-between"}
        position={"sticky"}
        top={"64px"}
        zIndex={2}
        backgroundColor={"white"}
        p={3}
      >
        <Box visibility={{ base: "block", md: "hidden" }}>
          <Popover placement="bottom-start">
            <PopoverTrigger>
              <Button rightIcon={<ChevronDownIcon />}>Filter</Button>
            </PopoverTrigger>
            <PopoverContent zIndex={2} p={'4%'}>

                <SidePanel price={price} setprice={setprice}/>

            </PopoverContent>
          </Popover>
        </Box>
        <Box>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              SortBy
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => handleSorting("asc")}>
                Low to High
              </MenuItem>
              <MenuItem onClick={() => handleSorting("desc")}>
                High to Low
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </HStack>
      <br />
      <Stack direction="row" spacing={4}>
        <Hide below="md">
          <VStack className="sidePanel"
            w={{ sm: "0%", md: "50%", lg: "30%" }}
            border="0px solid grey"
            align="flex-start"
            alignSelf={"start"}
            position={"sticky"}
            top={"17vh"}
            borderRight={"1px solid grey"}
            paddingRight={3}
          >
            <SidePanel price={price} setprice={setprice}/>
          </VStack>
        </Hide>

        {products?.length == 0 ? (
          <Box w="100%">
            <ProductSkeleton/>
            <ProductSkeleton/>
            <ProductSkeleton/>
            <ProductSkeleton/>
          </Box>
        ) : (
          <VStack
            w={{ base: "100%", sm: "100%", md: "100%" }}
            border="0px solid"
          >
            {products.map((product) => (
              <ProductCard product={product} key={product.id} id={product.id} />
            ))}
          </VStack>
        )}
      </Stack>
    </Box>
  );
}
