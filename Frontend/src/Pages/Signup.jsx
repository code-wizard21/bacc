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
  FormHelperText,
} from "@chakra-ui/react";

import { useContext, useEffect, useState } from "react";
import { CheckIcon, CloseIcon, ViewIcon, ViewOffIcon, WarningTwoIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Alert from "../Components/Alert";
import { AuthContext } from "../Contexts/AuthContextProvider";

export default function Signup() {
  let initial = {
    mobile: "",
    email: "",
    password: "",
    isAdmin: false,
  };
  const [showPassword, setShowPassword] = useState(false);
  let { Login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [signup, setsignup] = useState(initial);

  const handleChange = (el) => {
    setsignup({ ...signup, [el.target.name]: el.target.value });

    if (signup.mobile.length >= 9) {
      document.getElementById("mobile").type = "text";
    } else document.getElementById("mobile").type = "number";
  };

  const toast = useToast();

  const authenticating = (data) => {
    if (data == "success") navigate("/");
    let alertdata = {
      title: data == "success" ? "Signup Successfull" : "User already present",
      description:
        data == "success"
          ? "You're being redirected to the Home Page"
          : "Please try again!",
      status: data == "success" ? "success" : "warning",
    };
    toast(Alert(alertdata));
    Login();
  };

  const handleSignup = () => {   
      axios({
        method: "post",
        url: `${process.env.REACT_APP_URL}/authentication`,
        data: signup,
      })
        .then((res) => authenticating(res.data))
        .catch((err) => console.log(err));
  };

  const EMAIL_REGEX = /^[\w]+@([\w-]+\.)+[\w-]{3}$/g;
  const PASS_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
  const [validNumber, setValidNumber] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);

  useEffect(() => {
    if (signup.mobile.length == 10) setValidNumber(true);
    else setValidNumber(false);

    const res = EMAIL_REGEX.test(signup.email);
    setValidEmail(res);

    const pass = PASS_REGEX.test(signup.password);
    setValidPassword(pass);
  }, [signup.mobile, signup.email, signup.password]);

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
            <FormControl>
              <FormLabel>
                Mobile Number{" "}
                <CheckIcon
                  color={"green"}
                  display={validNumber ? "inline" : "none"}
                />{" "}
                <CloseIcon
                  color={"red"}
                  display={validNumber || !signup.mobile ? "none" : "inline"}
                />
              </FormLabel>
              <Input
                type="number"
                minLength={"10"}
                maxLength={"10"}
                id="mobile"
                name="mobile"
                onChange={handleChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel>
                Email address{" "}
                <CheckIcon
                  color={"green"}
                  display={validEmail ? "inline" : "none"}
                />{" "}
                <CloseIcon
                  color={"red"}
                  display={validEmail || !signup.email ? "none" : "inline"}
                />
              </FormLabel>
              <Input type="email" name="email" onChange={handleChange} />
            </FormControl>

            <FormControl>
              <FormLabel>
                Password{" "}
                <CheckIcon
                  color={"green"}
                  display={validPassword ? "inline" : "none"}
                />{" "}
                <CloseIcon
                  color={"red"}
                  display={
                    validPassword || !signup.password ? "none" : "inline"
                  }
                />
              </FormLabel>
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
              <FormHelperText color={"red"} textAlign={'start'}>
                <WarningTwoIcon boxSize={'1.2em'}/>
                {" "}8 to 24 characters.
                <br />
                Must include uppercase and lowercase letters, a number and a
                special character.
              </FormHelperText>
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
                isDisabled={validNumber && validEmail && validPassword?false:true}
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
