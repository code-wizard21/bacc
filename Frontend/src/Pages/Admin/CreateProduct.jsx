import { Box, Button, FormLabel, Input, useToast } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

var initialdetails = {
  location: "",
  name: "",
  price: "",
  image: "",
  amenities:[],
};

export const CreateProduct = () => {
  const toast=useToast()
  const navigate=useNavigate()
  const [details,setdetails]=React.useState(initialdetails)
  // console.log(details)

  const handleChange=(e)=>{
    if(e.target.name=='amenities')
    {
      let ar=e.target.value.split(",")
      setdetails({...details,[e.target.name]:ar})
    } 
    else setdetails({...details,[e.target.name]:e.target.value})
  }

  const handleSubmit=(event)=>{
    event.preventDefault()
    let flag=false;
    for(let key in details)
    {
      if(details[key]==""||details[key]==[]) 
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
        toast({
          title:'Destination added successfully!',
          status:'success',
          duration:2000,
          position:'top',
        })
        navigate('/admin/productDashboard')
      })
      .catch(err=>console.log(err))
    }
    else
    {
      toast({
        title:'Empty Fields!',
        status:'warning',
        duration:2000,
        position:'top',
      })
    }
  }

  return (
    <div>
      <Box width={"80%"} margin={"auto"} p={"5%"}>
        <form action="" onSubmit={(event)=>handleSubmit(event)}>
          <FormLabel>Location</FormLabel>
          <Input
            name="location"
            onChange={handleChange}
          />
          <FormLabel mt={4}>Hotel Name</FormLabel>
          <Input
            name="name"
            onChange={handleChange}
          />
          <FormLabel mt={4}>Price</FormLabel>
          <Input
            name="price"
            onChange={handleChange}
          />
          <FormLabel mt={4}>Image URL</FormLabel>
          <Input
            name="image"
            onChange={handleChange}
          />
          <FormLabel mt={4}>Amenities</FormLabel>
          <Input
            name="amenities"
            placeholder="amenity1,amenity2,amenity2,..."
            onChange={handleChange}
          />
          <Input bg="blue.400" type="submit" marginTop={'4%'}/>
        </form>
      </Box>
    </div>
  );
};
