import { Box, Heading } from "@chakra-ui/react";
import React from "react";

export const Error404 = () => {
  return (
    <div>
      <Box height={"63vh"}>
        <Box paddingTop={'10%'}>
          <Heading>Error 404</Heading>
          <Heading>Page Not Found</Heading>
        </Box>
      </Box>
    </div>
  );
};
