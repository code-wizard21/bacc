import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    useToast,
  } from '@chakra-ui/react';
import axios from 'axios';
import { useContext } from 'react';
import { useState } from 'react';
import { Navigate,useNavigate } from 'react-router-dom';
import Alert from '../Components/Alert';
import { AuthContext } from '../Contexts/AuthContextProvider';
  
  export default function Login() {
    const {Login}=useContext(AuthContext)
    const navigate=useNavigate();
    const [confirm,setconfirm]=useState("")
    //console.log(confirm)
    let initial={
      mobile:null,
      password:null,
    }
    const [login, setlogin] = useState(initial)
    //console.log(login)

    const toast = useToast()

    const handleChange=(el)=>{
      setlogin({...login,[el.target.name]:el.target.value})
    }

    const handleLogin=()=>{
      const FtchData = async () => {
        try {
            let res = await axios({
                method: 'get',
                url: `http://localhost:3000/authentication?mobile=${login.mobile}`,
            })
            //console.log(res)
            setconfirm(res.data[0])
            authenticating()
            //setproducts(res.data)
        } catch (error) {
            console.error(error)
        }
    }
    FtchData()
}


const authenticating=()=>{
 if(login.password==confirm.password)
  { 
    navigate('/')
    let alertdata={
      title: 'Hurrah...Login Success',
      description: "You're bring redirected to Home Page",
      status: 'success',
    }
    toast(Alert(alertdata))
    Login()
    localStorage.setItem('booking',JSON.stringify(login))
  }
 else 
  {
    let alertdata={
      title: 'Invalid credentials',
      description: "Please try again",
      status: 'warning',
    }
    toast(Alert(alertdata))
}
}



    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Welcome again...</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              Glad to see you back 
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="mobile">
                <FormLabel>Phone number</FormLabel>
                <Input type="number" name='mobile' onChange={handleChange}/>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" name='password' onChange={handleChange}/>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  onClick={handleLogin}>
                  Log in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }