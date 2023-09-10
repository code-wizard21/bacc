import { Box, Button, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

export const VisitorData = () => {
  const [visitors, setVisitors] = React.useState([]);
  const navigate=useNavigate()

  React.useEffect(() => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_URL}/visitor/all`,
    })
      .then((res) => setVisitors(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Box backgroundColor={"gray.100"}>
        <Box marginY={"2%"}>
          <TableContainer>
            <Table variant="striped" size={"sm"} colorScheme="teal">
              <Thead>
                <Tr>
                  <Th>S.No</Th>
                  <Th>IP address</Th>
                  <Th>Host Name</Th>
                  <Th>Date</Th>
                  <Th>Time</Th>
                  <Th>Operating System</Th>
                  <Th>Total Mem. (RAM)</Th>
                  <Th>Free Mem. (RAM)</Th>
                </Tr>
              </Thead>
              <Tbody>
                {visitors?.sort((a,b)=>b.id-a.id)?.map((visitor,i) => (
                  <Tr key={visitor._id}>
                    <Td>{i+1}</Td>
                    <Td>{visitor.ipAddress}</Td>
                    <Td>{visitor.hostname}</Td>
                    <Td>{visitor.date}</Td>
                    <Td>{visitor.time}</Td>
                    <Td>{visitor.OSversion}</Td>
                    <Td>{(visitor.totalmemory/(1024*1024*1024)).toFixed(2)}</Td>
                    <Td>{(visitor.freememory/(1024*1024*1024)).toFixed(2)}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
        <Button colorScheme="blue" marginBottom={"2%"} onClick={()=>navigate('/admin')}>Go Back</Button>
      </Box>
    </div>
  );
};
