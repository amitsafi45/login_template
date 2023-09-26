import { Box } from '@chakra-ui/react'
import React from 'react'
import { Login } from '../component/Login'

export const LoginPage = () => {
  return (
    <>
    <Box width={"100vw"} height={"100vh"} display={'flex'} justifyContent={"center"} alignItems={"center"}>
      <Login/>
    </Box>
    </>
  )
}
