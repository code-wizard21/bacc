import {
  Box,
  Center,
  Spinner,
  Heading,
  VStack,
  Text,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function SuccessPayment() {
  const [countdown, setCountdown] = useState(5);
  const cref = useRef("");
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("booking");

    if (countdown === 0) navigate("/");

    cref.current = setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(cref.current);
  });
  return (
    <Box textAlign="center" margin="11% 0%" border={"0px"}>
      <CheckCircleIcon boxSize={"50px"} color={"green.500"} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Booking Confirmed!
      </Heading>
      <Text color={"gray.500"}>
        Booking Details has been send to your email address.
      </Text>
      <Text marginTop={"3%"} fontWeight={"bold"}>
        Redirecting to Homepage in
      </Text>
      <Heading size={"md"} color={"blue"}>
        {countdown}
      </Heading>
    </Box>
  );
}

function Loader() {
  return (
    <VStack spacing={5}>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
      <Heading>Just hang on...</Heading>
      <Heading>We are almost done</Heading>
    </VStack>
  );
}

export default function PaymentInProcess() {
  const [searchParams,setSearchParams]=useSearchParams()
  let [flag, setflag] = useState(false);

  setTimeout(() => {
    setflag(true);
  }, 4000);

  useEffect(()=>{
    setSearchParams({isAuth:true})
  },[])

  return (
    <>
      <Center h="800px">{flag ? <SuccessPayment /> : <Loader />}</Center>
    </>
  );
}
