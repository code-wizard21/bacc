import { Box, Button, FormLabel, Input } from "@chakra-ui/react";
import React from "react";

export const CreateProduct = () => {
  let initialdata = {
    location: "",
    name: "",
    price: "",
    image: "",
  };

  return (
    <div>
      <Box>
          <FormLabel>Location</FormLabel>
          <Input
            name="location"
            // onChange={(e) => handleChange(e)}
          />
          <FormLabel mt={4}>Hotel Name</FormLabel>
          <Input
            name="name"
            // onChange={(e) => handleChange(e)}
          />
          <FormLabel mt={4}>Price</FormLabel>
          <Input
            name="price"
            // onChange={(e) => handleChange(e)}
          />
          <FormLabel mt={4}>Image</FormLabel>
          <Input
            name="image"
            // onChange={(e) => handleChange(e)}
          />
          <Button>Submit</Button>
      </Box>
    </div>
  );
};
