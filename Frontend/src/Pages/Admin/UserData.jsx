import axios from "axios";
import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Button,
  useDisclosure,
  FormLabel,
  Input,
  Checkbox,
} from "@chakra-ui/react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

export const UserData = () => {
  const [allUsers, setallUsers] = React.useState([]);
  const [edit, setEdit]=React.useState("")
  const { isOpen, onOpen, onClose } = useDisclosure();

  const FetchUserData=()=>{
    axios({
      method: "get",
      url: `${process.env.REACT_APP_URL}/admin/allUsers`,
    })
      .then((res) => setallUsers(res.data))
      .catch((err) => console.log(err));
  }

  const handleEdit=(data)=>{
    setEdit(data)
    onOpen()
  }

  const handleChange=(e)=>{
    setEdit({...edit,isAdmin:e.target.checked})
  }

  const handleSubmit=()=>{
    onClose()
    axios({
        method:'put',
        url:`${process.env.REACT_APP_URL}/admin/editUser`,
        data: edit
    })
    .then(res=>FetchUserData())
    .catch(err=>console.log(err))
  }

  const handleDelete=(id)=>{
    axios({
      method:'delete',
      url:`${process.env.REACT_APP_URL}/admin/deleteUser`,
      headers:{id}
    })
    .then(res=>FetchUserData())
    .catch(err=>console.log(err))
  }

  React.useEffect(() => {
    FetchUserData()
  }, []);
  return (
    <div>
      <Box marginTop={'2%'}>
          <TableContainer>
            <Table variant="striped" colorScheme="teal">
              <Thead>
                <Tr>
                  <Th>S.No</Th>
                  <Th>Mobile</Th>
                  <Th>Email</Th>
                  <Th>Admin</Th>
                  <Th>Edit</Th>
                  <Th>Delete</Th>
                </Tr>
              </Thead>
              <Tbody>
                {allUsers?.map((user,index)=>
                <Tr key={index}>
                <Td>{index+1}</Td>
                <Td>{user.mobile}</Td>
                <Td>{user.email}</Td>
                <Td>{user.isAdmin?'YES':'NO'}</Td>
                <Td>
                  <Button onClick={()=>handleEdit(user)}><EditIcon/></Button>
                </Td>
                <Td>
                  <Button colorScheme="red" onClick={()=>handleDelete(user._id)}><DeleteIcon/></Button>
                </Td>
              </Tr>
                )}            
              </Tbody>
            </Table>
          </TableContainer>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormLabel>Mobile</FormLabel>
            <Input readOnly value={edit?.mobile || ""} />
            <FormLabel mt={4}>Email</FormLabel>
            <Input readOnly value={edit?.email || ""} />
            <FormLabel mt={4}>Admin</FormLabel>
            <Checkbox isChecked={edit?.isAdmin} onChange={(e)=>handleChange(e)}>IsAdmin</Checkbox>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
