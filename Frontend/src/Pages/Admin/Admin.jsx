import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Admin = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Box h={"63vh"} border={"0px"} display={"grid"} alignItems={"center"}>
        <Box border={"0px"} display={"flex"} justifyContent={"space-evenly"}>
          <Button colorScheme="teal" onClick={() => navigate("/admin/productDashboard")}>
            Product Dashboard
          </Button>
          <Button colorScheme="blue" onClick={() => navigate("/admin/userDashboard")}>
            User Dashboard
          </Button>
        </Box>
      </Box>
    </div>
  );
};
