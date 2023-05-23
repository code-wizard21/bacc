import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Admin = () => {
  const navigate=useNavigate()
  return (
    <div>
      <Box h={'100vh'} >
      <Button onClick={()=>navigate('/admin/productDashboard')}>Product Dashboard</Button>
      <Button onClick={()=>navigate('/admin/userDashboard')}>User Dashboard</Button>
      </Box>
    </div>
  )
}
