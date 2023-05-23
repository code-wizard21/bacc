import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  HStack,
  Heading,
  Hide,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  SkeletonCircle,
  SkeletonText,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import PriceSlider from "../Components/PriceSlider";
import ProductCard from "../Components/ProductCard";
import SearchPanel from "../Components/SearchPanel";
import { useLocation, useSearchParams } from "react-router-dom";

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
            <PopoverContent zIndex={2}>
              <Box>
                <PopoverHeader fontWeight="semibold">
                  <Heading size="md">Traveller Experience</Heading>
                </PopoverHeader>
                <PopoverBody>
                  <VStack align="flex-start">
                    <Checkbox size="lg" isChecked>
                      LGBTQ welcoming:
                    </Checkbox>
                    <Text paddingLeft={6} textAlign="start">
                      See properties that pledge to make all guests feel safe,
                      welcome, and respected.
                    </Text>

                    <Checkbox size="lg">Bussiness Frendly:</Checkbox>
                    <Text paddingLeft={6} textAlign="start">
                      See properties with amenities to help you work
                      comfortably, like WiFi and breakfast.
                    </Text>

                    <Checkbox size="lg">Family Friendly:</Checkbox>
                    <Text paddingLeft={6} textAlign="start">
                      See properties that include family essentials like in-room
                      conveniences and activities for the kids.
                    </Text>
                  </VStack>
                </PopoverBody>
              </Box>
              <Box>
                <PopoverHeader fontWeight="semibold">
                  <Heading size="md">Price</Heading>
                </PopoverHeader>
                <PopoverBody>
                  <Container direction="row">
                    <PriceSlider setprice={setprice} price={price}/>
                  </Container>
                </PopoverBody>
              </Box>
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
          <VStack
            w={{ sm: "0%", md: "50%", lg: "30%" }}
            border="0px solid grey"
            align="flex-start"
            alignSelf={"start"}
            position={"sticky"}
            top={"17vh"}
            borderRight={"1px solid grey"}
            paddingRight={3}
          >
            <Heading size="md">Traveller Experience</Heading>
            <Checkbox size="lg" isChecked>
              LGBTQ welcoming:
            </Checkbox>
            <Text paddingLeft={6} textAlign="start">
              See properties that pledge to make all guests feel safe, welcome,
              and respected.
            </Text>

            <Checkbox size="lg">Bussiness Frendly:</Checkbox>
            <Text paddingLeft={6} textAlign="start">
              See properties with amenities to help you work comfortably, like
              WiFi and breakfast.
            </Text>

            <Checkbox size="lg">Family Friendly:</Checkbox>
            <Text paddingLeft={6} textAlign="start">
              See properties that include family essentials like in-room
              conveniences and activities for the kids.
            </Text>
            <Divider orientation="horizontal" />
            <br />
            <Heading size="md">Price</Heading>
            <Container direction="row">
              <PriceSlider setprice={setprice} price={price}/>
            </Container>
          </VStack>
        </Hide>

        {products.length == 0 ? (
          <Box w="100%">
            <Box padding="6" boxShadow="lg" bg="white">
              <SkeletonCircle size="10" />
              <SkeletonText
                mt="4"
                noOfLines={4}
                spacing="4"
                skeletonHeight="2"
              />
            </Box>
            <Box padding="6" boxShadow="lg" bg="white">
              <SkeletonCircle size="10" />
              <SkeletonText
                mt="4"
                noOfLines={4}
                spacing="4"
                skeletonHeight="2"
              />
            </Box>
            <Box padding="6" boxShadow="lg" bg="white">
              <SkeletonCircle size="10" />
              <SkeletonText
                mt="4"
                noOfLines={4}
                spacing="4"
                skeletonHeight="2"
              />
            </Box>
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
