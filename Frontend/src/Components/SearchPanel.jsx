import {
  Button,
  Stack,
  Input,
  InputGroup,
  InputLeftAddon,
  Box,
  HStack,
  useToast,
  Text,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import DatalistInput from "react-datalist-input";
import "react-datalist-input/dist/styles.css";
import { useContext } from "react";
import { SearchContext } from "../Contexts/SearchContextProvider";
import { useState } from "react";
import Alert from "./Alert";

export default function SearchPanel() {
  const navigate = useNavigate();
  const { setsearch } = useContext(SearchContext);
  const [location, setlocation] = useState(null);
  const toast = useToast();
  let alertdata = {
    title: " Invalid Input",
    description: "Please check the input again",
    status: "warning",
  };

  let initialdata = {
    destination: null,
    checkin: null,
    checkout: null,
    travellers: null,
    rooms: null,
  };

  const [traveldata, settraveldata] = useState(initialdata);
  // console.log(traveldata)

  let handletraveller = (el) => {
    settraveldata({ ...traveldata, [el.target.name]: el.target.value });
  };

  const handleSearch = () => {
    let flag = true;
    for (let key in traveldata) {
      if (traveldata[key] == null) {
        toast(Alert(alertdata));
        flag = false;
        break;
      }
    }
    if (
      traveldata.travellers < traveldata.rooms ||
      traveldata.travellers / traveldata.rooms > 3
    ) {
      toast(Alert(alertdata));
      flag = false;
    }

    if (flag == true) {
      let bookingdata = JSON.parse(localStorage.getItem("booking"));
      setsearch(location);
      navigate("/products");
      localStorage.setItem(
        "booking",
        JSON.stringify({ ...bookingdata, ...traveldata })
      );
    }
  };
  // console.log(new Date().getFullYear()+`-${new Date().getMonth()>8?"":0}`+(new Date().getMonth()+1)+"-"+new Date().getDate())
  return (
    <div style={{ marginBottom: "2%", border: "0px solid" }}>
      <Box marginTop="2%">
        <InputGroup
          color={"gray.500"}
          borderRadius={"0%"}
          border={"0.5rem outset pink"}
          w={{ base: "14em", sm: "20em" }}
          margin="auto"
        >
          <InputLeftAddon h={"auto"}>Going to</InputLeftAddon>
          <DatalistInput
            // border={'1px'}
            placeholder="Enter the destination"
            onSelect={(item) => {
              setlocation(item.value);
              traveldata.destination = item.value;
            }}
            items={[
              { id: "Antartica", value: "Antartica" },
              { id: "Shara Desert", value: "Shara Desert" },
              { id: "Amazon", value: "Amazon" },
              { id: "Mt.Everst", value: "Mt.Everst" },
              { id: "Goa", value: "Goa" },
            ]}
          />
        </InputGroup>
      </Box>
      <Stack
        direction={{ base: "column", lg: "row" }}
        spacing={2}
        padding={5}
        border="0px solid"
        justifyContent="space-evenly"
      >
        <Stack direction={{ base: "column", sm: "row" }}>
          <InputGroup>
            <InputLeftAddon>Check In</InputLeftAddon>
            <Input
              size="md"
              type="date"
              name="checkin"
              onChange={handletraveller}
              min={new Date().getFullYear()+`-${new Date().getMonth()>8?"":0}`+(new Date().getMonth()+1)+"-"+new Date().getDate()}
            />
          </InputGroup>

          <InputGroup>
            <InputLeftAddon>Check Out</InputLeftAddon>
            <Input
              size="md"
              type="date"
              name="checkout"
              onChange={handletraveller}
              disabled={traveldata.checkin?false:true}
              min={traveldata.checkin}
            />
          </InputGroup>
        </Stack>
        <Stack direction={{ base: "column", sm: "row" }}>
          <InputGroup>
            <InputLeftAddon>Travellers</InputLeftAddon>
            <Input
              placeholder="Number of Travellers"
              size="md"
              type="number"
              name="travellers"
              onChange={handletraveller}
            />
          </InputGroup>

          <InputGroup>
            <InputLeftAddon>Rooms</InputLeftAddon>
            <Input
              placeholder="Number of Rooms"
              size="md"
              type="number"
              name="rooms"
              onChange={handletraveller}
            />
          </InputGroup>
        </Stack>
      </Stack>

      <Button colorScheme="blue" size="lg" onClick={handleSearch}>
        Search
      </Button>

      <Text textAlign="end">*Maximum: 3 Individuals/room</Text>
    </div>
  );
}
