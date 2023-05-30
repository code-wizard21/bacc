import { Box, Button, FormLabel, Input } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

var initialdetails = {
  location: "",
  name: "",
  price: "",
  image: "",
};

export const CreateProduct = () => {
  const navigate=useNavigate()
  const [details,setdetails]=React.useState(initialdetails)

  const handleChange=(e)=>{
    setdetails({...details,[e.target.name]:e.target.value})
  }

  const handleSubmit=(event)=>{
    event.preventDefault()
    let flag=false;
    for(let key in details)
    {
      if(details[key]=="") 
      {
        flag=true;
        break;
      }
    }
    if(!flag)
    {
      axios({
        method:'post',
        url:`${process.env.REACT_APP_URL}/admin/addProduct`,
        data:details
      })
      .then(res=>{
        navigate('/admin/productDashboard')
      })
      .catch(err=>console.log(err))
    }
  }

  return (
    <div>
      <Box width={"80%"} margin={"auto"} p={"5%"}>
        <form action="" onSubmit={(event)=>handleSubmit(event)}>
          <FormLabel>Location</FormLabel>
          <Input
            name="location"
            onChange={(e) => handleChange(e)}
          />
          <FormLabel mt={4}>Hotel Name</FormLabel>
          <Input
            name="name"
            onChange={(e) => handleChange(e)}
          />
          <FormLabel mt={4}>Price</FormLabel>
          <Input
            name="price"
            onChange={(e) => handleChange(e)}
          />
          <FormLabel mt={4}>Image URL</FormLabel>
          <Input
            name="image"
            onChange={(e) => handleChange(e)}
          />
          <Input bg="blue.400" type="submit" marginTop={'4%'}/>
        </form>
      </Box>
    </div>
  );
};
