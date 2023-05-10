import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  Center,
  Image,
} from "@chakra-ui/react";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContextProvider";

export default function Navbar() {
  const navigate = useNavigate();
  const { isAuth, Logout } = useContext(AuthContext);
  let userdata = JSON.parse(localStorage.getItem("booking"));

  const handleLogout = () => {
    Logout();
    localStorage.clear();
    navigate(`/`);
  };

  return (
    <div style={{ position: "sticky", top: "0px", zIndex: "10" }}>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Link to="/">
            <Box>
              <Image
                src="https://pbs.twimg.com/media/Fj4QgELaEAIL8IQ?format=png&name=small"
                width={{ base: "5em", md: "8em" }}
                alt="logo"
              />
            </Box>
          </Link>

          <Flex alignItems={"center"} border={"0px"}>
            <Stack direction={"row"} spacing={{ base: "1%", md: 4 }}>
              <Link to="/login">
                <Button
                  disabled={isAuth ? true : false}
                  variant={"outline"}
                  colorScheme={"teal"}
                  size={{ base: "sm", md: "md" }}
                  mr={4}
                >
                  Login
                </Button>
              </Link>

              <Link to="/signup">
                <Button
                  disabled={isAuth ? true : false}
                  variant={"solid"}
                  colorScheme={"pink"}
                  // size={'md'}
                  size={{ base: "sm", md: "md" }}
                  mr={4}
                >
                  Signup
                </Button>
              </Link>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={"https://wallpaperaccess.com/full/226302.jpg"}
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={"https://wallpaperaccess.com/full/226302.jpg"}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>{userdata?.mobile}</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <Link to="/admin">
                    <MenuItem>Admin User</MenuItem>
                  </Link>
                  <MenuItem onClick={handleLogout} isDisabled={isAuth?false:true}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </div>
  );
}
