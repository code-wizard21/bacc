import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
  useToast,
} from "@chakra-ui/react";
import Alert from "../Components/Alert";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContextProvider";
import { Navigate, useParams } from "react-router-dom";
import React from "react";

export default function Product({ products }) {
  let { isAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const toast = useToast();
  let bookingdata = JSON.parse(localStorage.getItem("booking"));

  const handleReserve = () => {

    navigate("/checkout");
    localStorage.setItem(
      "booking",
      JSON.stringify({
        ...bookingdata,
        price: products.price,
        hotel: products.name,
      })
    );

    let alertdata = {
      title: " Kindly Login/Signup first",
      description: "Sorry to interrupt, but we can't proceed further.",
      status: "warning",
    };
    if (!isAuth) toast(Alert(alertdata));
  };

  
  return (
    <>
      <Container maxW={"7xl"} border="0px solid">
        <SimpleGrid
          border="0px solid"
          columns={1}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
        >
          <Flex border="0px solid">
            <Image
              rounded={"md"}
              alt={"product image"}
              src={products.image}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={{ base: "100%", sm: "400px", lg: "500px" }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={"header"}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
              >
                {products.name}
              </Heading>
              <Text
                color={useColorModeValue("gray.900", "gray.400")}
                fontWeight={300}
                fontSize={"2xl"}
              >
                {products.price} Rs./ Individual
              </Text>
            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.200", "gray.600")}
                />
              }
            >
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue("gray.500", "gray.400")}
                  fontSize={"2xl"}
                  fontWeight={"300"}
                >
                  Along with a full-service spa, this hotel has a golf course
                  and an outdoor pool. Free WiFi in public areas and free valet
                  parking are also provided. Additionally, a restaurant, a
                  nightclub, and a health club are onsite.
                </Text>
                <Heading size="md">Awards and affiliations</Heading>
                <Text fontSize={"lg"}>
                  Green / Sustainable Property. This property participates in
                  EarthCheck, a program that measures the property's impact on
                  one or more of the following: environment, community,
                  cultural-heritage, the local economy.
                </Text>
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={useColorModeValue("yellow.500", "yellow.300")}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Amenities
                </Text>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem>Hot Tub</ListItem>
                    <ListItem>Free WiFi</ListItem>
                    <ListItem>Swimming Pool</ListItem>
                  </List>
                  <List spacing={2}>
                    <ListItem>Spa</ListItem>
                    <ListItem>Food and Drinks</ListItem>
                    <ListItem>Parking and Transportation</ListItem>
                  </List>
                </SimpleGrid>
              </Box>
              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={useColorModeValue("yellow.500", "yellow.300")}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Other Details
                </Text>

                <List spacing={2}>
                  <ListItem>WheelChair Accessible</ListItem>
                  <ListItem>LGBTQ Welcoming</ListItem>
                  <ListItem>Family Friendly</ListItem>
                  <ListItem>Safety Fit</ListItem>
                </List>
              </Box>
            </Stack>

            <Button
              onClick={handleReserve}
              rounded={"none"}
              w={"full"}
              mt={8}
              size={"lg"}
              py={"7"}
              bg={useColorModeValue("gray.900", "gray.50")}
              color={useColorModeValue("white", "gray.900")}
              textTransform={"uppercase"}
              _hover={{
                transform: "translateY(2px)",
                boxShadow: "lg",
              }}
            >
              Reserve a room
            </Button>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent={"center"}
            >
              <Text color="tomato">
                {Math.floor(Math.random() * 31) + 30} people booked this place
                today
              </Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </>
  );
}
