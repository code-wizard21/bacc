import {
  Box,
  Button,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContextProvider";

export const VisitorData = () => {
  const [visitors, setVisitors] = React.useState([]);
  let { isTourist } = useContext(AuthContext);
  const navigate = useNavigate();

  const fetchData = () => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_URL}/visitor/all`,
    })
      .then((res) => setVisitors(res.data))
      .catch((err) => console.log(err));
  };

  const handleClear = () => {
    if (!isTourist) {                                                  //the tourists should not be able to manipulate the data
      axios({
        method: "delete",
        url: `${process.env.REACT_APP_URL}/visitor/clearAll`,
      })
        .then((res) => {
          console.log(res);
          fetchData();
        })
        .catch((err) => console.log(err));
    } else alert("You are not authorized!");
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Box backgroundColor={"gray.100"}>
        <Box border={"0px"} display={"flex"} justifyContent={"end"}>
          <Button colorScheme="red" onClick={handleClear}>
            Clear All
          </Button>
        </Box>
        <Box marginY={"2%"}>
          <TableContainer>
            <Table variant="striped" size={"sm"} colorScheme="teal">
              <Thead>
                <Tr>
                  <Th>S.No</Th>
                  <Th>IP address</Th>
                  <Th>Browser</Th>
                  <Th>Date</Th>
                  <Th>Time</Th>
                  <Th>Operating System</Th>
                </Tr>
              </Thead>
              <Tbody>
                {visitors
                  ?.sort((a, b) => b.id - a.id)
                  ?.map((visitor, i) => (
                    <Tr key={visitor._id}>
                      <Td>{i + 1}</Td>
                      <Td>{visitor.ipAddress}</Td>
                      <Td>{visitor.browser}</Td>
                      <Td>{visitor.date}</Td>
                      <Td>{visitor.time}</Td>
                      <Td>{visitor.os}</Td>
                    </Tr>
                  ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
        <Button
          colorScheme="blue"
          marginBottom={"2%"}
          onClick={() => navigate("/admin")}
        >
          Go Back
        </Button>
      </Box>
    </div>
  );
};
