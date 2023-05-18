import {
  Button,
  Stack,
  Input,
  InputGroup,
  InputLeftAddon,
  Box,
  useToast,
  Text,
} from "@chakra-ui/react";
import { useNavigate, useSearchParams } from "react-router-dom";
import DatalistInput from "react-datalist-input";
import "react-datalist-input/dist/styles.css";
import { useContext, useRef } from "react";
import { SearchContext } from "../Contexts/SearchContextProvider";
import { useState } from "react";
import Alert from "./Alert";

export default function SearchPanel() {
  const navigate = useNavigate();
  const { setsearch } = useContext(SearchContext);
  const [location, setlocation] = useState("");
  // console.log(location)
  const toast = useToast();

  let initialdata = {
    destination: "",
    checkin: "",
    checkout: "",
    travellers: "",
    rooms: "",
  };

  const [traveldata, settraveldata] = useState(initialdata);

  let handletraveller = (el) => {
    settraveldata({ ...traveldata, [el.target.name]: el.target.value });
  };

  //------------------------Search function if criterias are fulfilled--------------------------------
  const handleSearch = () => {
    let alertdata = {
      title: " Invalid Input",
      description: "Please check the input again",
      status: "warning",
    };
    let flag = true;
    for (let key in traveldata) {
      if (traveldata[key] == "") {
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
      setsearch([
        location,
        traveldata.checkin,
        traveldata.checkout,
        traveldata.travellers,
        traveldata.rooms,
      ]);
      navigate("/products");
      localStorage.setItem(
        "booking",
        JSON.stringify({ ...bookingdata, ...traveldata })
      );
    }
  };

  //------------------- Debouncer using closure for API Search----------------------------
  const debounceRef = useRef();
  const debounceSearch = () => {
    return () => {
      debounceRef.current && clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => {
        handleSearch();
      }, 1000);
    };
  };

  let obj={
    "Goa":1,
    "Antartica":1,
    "Shara Desert":1,
    "Mt.Everst":1,
    "Amazon":1
  }
  window.onclick=()=>{
    if(!obj[location] && location!="") document.getElementById('notAvailable').style.visibility="visible"
  }
  const handleSearchChange=(e)=>{
    document.getElementById('notAvailable').style.visibility="hidden"
    setlocation(e.target.value)
  }

  // console.log(new Date().getFullYear()+`-${new Date().getMonth()>8?"":0}`+(new Date().getMonth()+1)+`-${new Date().getDate()>9?"":0}`+new Date().getDate())
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
            onChange={(e)=>handleSearchChange(e)}
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
        <Text id="notAvailable" color='red' visibility={'hidden'}>Destination not available!</Text>
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
              min={
                new Date().getFullYear() +
                `-${new Date().getMonth() > 8 ? "" : 0}` +
                (new Date().getMonth() + 1) +
                `-${new Date().getDate() > 9 ? "" : 0}` +
                new Date().getDate()
              }
            />
          </InputGroup>

          <InputGroup>
            <InputLeftAddon>Check Out</InputLeftAddon>
            <Input
              size="md"
              type="date"
              name="checkout"
              onChange={handletraveller}
              disabled={traveldata.checkin ? false : true}
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

      <Button colorScheme="blue" size="lg" onClick={debounceSearch()}>
        Search
      </Button>

      <Text textAlign="end">*Maximum: 3 Individuals/room</Text>
    </div>
  );
}
