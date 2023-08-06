import axios from "axios";
import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Button,
  useDisclosure,
  FormLabel,
  Input,
  Link,
  Select,
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
import { useNavigate } from "react-router-dom";

export const ProductsData = () => {
  const [allproducts, setAllProducts] = React.useState([]);
  const [edit, setEdit] = React.useState("");
  // console.log(edit)
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const FetchProductData = () => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_URL}/admin/allProducts`,
    })
      .then((res) => setAllProducts(res.data))
      .catch((err) => console.log(err));
  };

  const handleEdit = (data) => {
    setEdit(data);
    onOpen();
  };

  const handleChange = (e) => {
    if(e.target.name==='amenities')
    {
      let ar=e.target.value.split(",")
      setEdit({...edit,[e.target.name]:ar})
    } 
    else setEdit({ ...edit, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onClose();
    axios({
      method: "put",
      url: `${process.env.REACT_APP_URL}/admin/editProduct`,
      data: edit,
    })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    axios({
      method: "delete",
      url: `${process.env.REACT_APP_URL}/admin/deleteProduct`,
      headers: { id },
    })
      .then((res) => FetchProductData())
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    FetchProductData();
  }, []);
  return (
    <div>
      <Box backgroundColor={"gray.100"}>
        <Box display={"flex"} justifyContent={"center"} padding={"1%"}>
          <Button
            colorScheme="teal"
            onClick={() => navigate("/admin/createProduct")}
          >
            Create
          </Button>
        </Box>
        <Box marginTop={"2%"}>
          <TableContainer>
            <Table variant="striped" size={"sm"} colorScheme="teal">
              <Thead>
                <Tr>
                  <Th>S.No</Th>
                  <Th>Location</Th>
                  <Th>Hotel Name</Th>
                  <Th>Price</Th>
                  <Th>Amenities</Th>
                  <Th>Image</Th>
                  <Th>Edit</Th>
                  <Th>Delete</Th>
                </Tr>
              </Thead>
              <Tbody>
                {allproducts?.map((product) => (
                  <Tr key={product.id}>
                    <Td>{product.id}</Td>
                    <Td>{product.location}</Td>
                    <Td>{product.name}</Td>
                    <Td>{product.price}</Td>
                    <Td>
                      {
                        <Select size={"xs"} width={"35px"}>
                          {product.amenities.map((each,i) => (
                            <option key={i}>{each}</option>
                          ))}
                        </Select>
                      }
                    </Td>
                    <Td>
                      <Link
                        color={"blue"}
                        textDecoration={"underline"}
                        target="_blank"
                        href={product.image}
                      >
                        click here
                      </Link>
                    </Td>
                    <Td>
                      <Button
                        size={"xs"}
                        colorScheme="blue"
                        onClick={() => handleEdit(product)}
                      >
                        <EditIcon />
                      </Button>
                    </Td>
                    <Td>
                      <Button
                        size={"xs"}
                        colorScheme="red"
                        onClick={() => handleDelete(product._id)}
                      >
                        <DeleteIcon />
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormLabel>Location</FormLabel>
            <Input
              defaultValue={edit?.location}
              name="location"
              onChange={handleChange}
            />
            <FormLabel mt={4}>Hotel Name</FormLabel>
            <Input
              defaultValue={edit.name}
              name="name"
              onChange={handleChange}
            />
            <FormLabel mt={4}>Price</FormLabel>
            <Input
              defaultValue={edit.price}
              name="price"
              onChange={handleChange}
            />
            <FormLabel mt={4}>Image</FormLabel>
            <Input
              defaultValue={edit.image}
              name="image"
              onChange={handleChange}
            />
            <FormLabel mt={4}>Amenities</FormLabel>
            <Input
              defaultValue={edit.amenities}
              name="amenities"
              onChange={handleChange}
            />
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
