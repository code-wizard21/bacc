import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  Link,
  useColorModeValue,
  useToast,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useContext } from "react";
import { useState, useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Alert from "../Components/Alert";
import EmailContactForm from "../Components/Mail";
import { AuthContext } from "../Contexts/AuthContextProvider";

export default function Login() {
  let { Login, page, isAdmin, setIsAdmin } = useContext(AuthContext);
  const navigate = useNavigate();

  let initial = {
    mobile: null,
    password: null,
    email: "",
  };
  const [login, setlogin] = useState(initial);
  const handleChange = (el) => {
    setlogin({ ...login, [el.target.name]: el.target.value });
  };

  const handleLogin = () => {
    const FtchData = async () => {
      try {
        let res = await axios({
          method: "post",
          url: `${process.env.REACT_APP_URL}/authentication/login`,
          data: login,
        });
        authenticating(res.data.msg);
        if(res.data.isAdmin) setIsAdmin(!isAdmin)
      } catch (error) {
        console.error(error);
      }
    };
    FtchData();
  };

  const toast = useToast();

  const authenticating = (response) => {
    if (response == "pass") {
      if (page) navigate(`/singleproduct/${page}`);
      else {
        navigate("/");
        let alertdata = {
          title: "Hurrah...Login Success!",
          description: "You're being redirected to Home Page",
          status: "success",
        };
        toast(Alert(alertdata));
      }
      Login();
    } else {
      let alertdata = {
        title: "Invalid Credentials",
        description: "Please try again",
        status: "warning",
      };
      toast(Alert(alertdata));
    }
  };


  //---------------If Forget password option selected-------------------
  const password=6789
  const [forget, setforget] = useState(false);

  const handleForget = () => {
    axios({
      method: "patch",
      url: `${process.env.REACT_APP_URL}/authentication/changepass`,
      data: { 
        email: login.email,
        password
       },
    })
      .then((res) => {
        let alertdata;
        if (res.data == "password changed") {
          EmailContactForm(password, login.email);
          alertdata = {
            title: "New Password has been send over your email",
            description: "Kindly check the email and use the new password to login",
            status: "success",
          };
          toast(Alert(alertdata));
          setforget(false)
        } else {
          alertdata = {
            title: "Email not registered",
            description: "Please try again",
            status: "warning",
          };
          toast(Alert(alertdata));
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Welcome again...</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              Glad to see you back
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
                <FormLabel>Phone number</FormLabel>
                <Input type="number" name="mobile" onChange={handleChange} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  onChange={handleChange}
                />
              </FormControl>
              <Stack spacing={10}>
                <Link color={"blue.400"} onClick={() => setforget(true)}>
                  Forgot password?
                </Link>
                <VStack display={forget ? "block" : "none"}>
                  <Input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    placeholder={"Enter registered email"}
                  />
                  <Button onClick={handleForget} colorScheme={"blue"}>
                    Send
                  </Button>
                </VStack>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  disabled={forget ? true : false}
                  onClick={handleLogin}
                >
                  Log in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
