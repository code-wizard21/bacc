import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";

import { useContext, useEffect, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Alert from "../Components/Alert";
import { AuthContext } from "../Contexts/AuthContextProvider";

export default function Signup() {
  let initial = {
    mobile: null,
    email: null,
    password: null,
  };
  const [showPassword, setShowPassword] = useState(false);
  let { Login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [signup, setsignup] = useState(initial);
  console.log(signup);

  const handleChange = (el) => {
    setsignup({ ...signup, [el.target.name]: el.target.value });
  };

  const toast = useToast();

  const authenticating = () => {
    navigate("/");
    let alertdata = {
      title: "Signup Successfull!",
      description: "You're being redirected to the Home Page",
      status: "success",
    };
    toast(Alert(alertdata));
    Login()
  };

  const handleSignup = () => {
    authenticating();
    // const FtchData = async () => {
    //   try {
    //     let res = await axios({
    //       method: "post",
    //       url: `https://real-rose-tortoise-tutu.cyclic.app/authentication`,
    //       //https://real-rose-tortoise-tutu.cyclic.app/authentication
    //       data: signup,
    //     });
    //     console.log(res);
        
    //     //setproducts(res.data)
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };

    //   FtchData();
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Join the League
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            You are amazing as you are ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="mobile">
              <FormLabel>Mobile Number</FormLabel>
              <Input type="number" name="mobile" onChange={handleChange} />
            </FormControl>

            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" name="email" onChange={handleChange} />
            </FormControl>

            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  onChange={handleChange}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={handleSignup}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already in Tribe?{" "}
                <Link to="/login">
                  <Text as="u">Login</Text>
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
