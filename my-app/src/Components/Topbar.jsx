import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Link,
  Button,
  useColorModeValue,
  Stack,
  Icon,
} from '@chakra-ui/react';

import {BiDesktop,BiMobile} from 'react-icons/bi'
import {FiTablet} from 'react-icons/fi'

import '../App.css';

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

export default function Topbar({setScreen}) {
    const handleScreen=(el)=>{
        let size='100%'
        if(el.target.name==='small') size='29em'
        else if(el.target.name==='medium') size='47em'
        setScreen(size)
    }
  return (
    <div style={{position:'sticky',top:'0px'}}>
      <Box bg={useColorModeValue('gray.400', 'gray.500')} px={4}>
        <Flex h={10} alignItems={'center'} justifyContent={'space-between'}>

          <Flex alignItems={'center'} margin={'auto'}>
            <Stack direction={'row'} spacing={7}>
            <Button colorScheme='blue' name='small' size="xs" onClick={handleScreen}><Icon as={BiMobile}/></Button>
            <Button colorScheme='blue' name='medium' size="xs" onClick={handleScreen}><Icon as={FiTablet}/></Button>
            <Button colorScheme='blue' name='large' size="xs" onClick={handleScreen}><Icon as={BiDesktop}/></Button>
              
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </div>
  );
}
// BiDesktop