import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  Link,
  useColorModeValue,
  useToast,
  Modal,
  useDisclosure,
} from '@chakra-ui/react';
import axios from 'axios';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState, useRef } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Alert from '../Components/Alert';
import EmailContactForm from '../Components/Mail';
import PinModal from '../Components/PinModal';
import Product from '../Components/Product';
import { AuthContext } from '../Contexts/AuthContextProvider';

export default function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  let { Login,page } = useContext(AuthContext)
  const navigate = useNavigate();
  const [confirm, setconfirm] = useState("")
  //console.log(confirm)
  let initial = {
    mobile: null,
    password: null,
  }
  const [login, setlogin] = useState(initial)
  //console.log(login)

  

  const handleChange = (el) => {
    setlogin({ ...login, [el.target.name]: el.target.value })
  }

  const handleLogin = () => {
    const FtchData = async () => {
      try {
        let res = await axios({
          method: 'get',
          url: `https://real-rose-tortoise-tutu.cyclic.app/authentication?mobile=${login.mobile}`,
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

//Authenticating the login credentials---------------------  
  const toast = useToast()

  const authenticating = () => {
    if (login.password == confirm.password) {
      navigate('/')
      let alertdata = {
        title: 'Hurrah...Login Success!',
        description: "You're being redirected to Home Page",
        status: 'success',
      }
      toast(Alert(alertdata))
      Login()
      localStorage.setItem('booking', JSON.stringify(login))
    }
    else {
      let alertdata = {
        title: 'Invalid Credentials',
        description: "Please try again",
        status: 'warning',
      }
      toast(Alert(alertdata))
    }
  }

//In case of Forget password option selected-------------------
//let [isOkay,setisOkay]=useState(false)
let [seq,setseq]=useState(9876)
console.log('seq: ', seq);
let [verify,setverify]=useState(null)
//console.log(verify)
//let isVerify="";
//console.log('isVerify: ', isVerify);

useEffect(()=>{
setInterval(()=>{
let randomseq = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
setseq(randomseq)
},60000)
},[])

const handleForget=()=>{
  EmailContactForm(seq)
  onOpen()
}
console.log(page)
let products=null;


// const FtchData = async () => {
//   try {
//     let res = await axios({
//       method: 'get',
//       url: `https://real-rose-tortoise-tutu.cyclic.app/products?id=${page}`,
//     })
//     console.log(res)
//     products=res.data[0]
//     setisOkay(true)
    
//   } catch (error) {
//     console.error(error)
//   }
// }

const handlePin = () => {
  let alertdata={
    title: 'Invalid Pin',
    description: "Please check the Pin and Try Again!",
    status: 'warning',
  }
  
  if(seq==verify)
  { 
    onClose();
    navigate(`/singleproduct/${page}`)
    Login()
    //FtchData()
  }
  else 
  {
    toast(Alert(alertdata))
  }
}


// if(isOkay) return(<Product products={products}/>)


// else
  return (<>
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
              <Input type="number" name='mobile' onChange={handleChange} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" name='password' onChange={handleChange} />
            </FormControl>
            <Stack spacing={10}>             
                <Link color={'blue.400'} onClick={handleForget}>Forgot password?</Link>
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

    <PinModal handlePin={handlePin} isOpen={isOpen} onClose={onClose} device={'email address'} isVerify={setverify}/>
  </>
  );
}