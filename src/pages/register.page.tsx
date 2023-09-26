import { Box } from '@chakra-ui/react'
import React from 'react'
import { Login } from '../component/Login'
import { Register } from '../component/Register'
import { Link } from 'react-router-dom'

export const RegisterPage = () => {
  return (
    <>
    <Box width={"100vw"} height={"100vh"} display={'flex'} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
      <Register/>
      
    </Box>
    </>
  )
}
