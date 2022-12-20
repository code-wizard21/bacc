import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Linki,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Image,
} from '@chakra-ui/react';
import { AddIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Navigate, Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContextProvider';


const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);



export default function Navbar() {
  const navigate=useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();
 // const { isOpen, onOpen, onClose } = useDisclosure();
 const {isAuth,Logout}=useContext(AuthContext)
 let userdata=JSON.parse(localStorage.getItem('booking'))

 const handleLogout=()=>{
  Logout();
  localStorage.clear()
  navigate(`/`)
}

  return (
    <div style={{ position: 'sticky', top: '0px', zIndex:'1' }}>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Link to='/'><Box><Image src='https://pbs.twimg.com/media/Fj4QgELaEAIL8IQ?format=png&name=small' width='8em' alt='logo' /></Box></Link>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={4}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Link to='/login'>
                <Button
                disabled={isAuth?true:false}
                  variant={'outline'}
                  colorScheme={'teal'}
                  size={'md'}
                  mr={4}>
                  Login
                </Button>
              </Link>

              <Link to='/signup'>
                <Button
                disabled={isAuth?true:false}
                  variant={'solid'}
                  colorScheme={'pink'}
                  size={'md'}
                  mr={4}>
                  Signup
                </Button>
              </Link>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://wallpaperaccess.com/full/226302.jpg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://wallpaperaccess.com/full/226302.jpg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>{userdata?.mobile}</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <Link to='/admin'><MenuItem>Admin User</MenuItem></Link>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </div>
  );
}