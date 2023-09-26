import { AbsoluteCenter, Box, Button, Divider,  FormLabel, Heading, Input, Text  } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

export const Register = () => {
  return (
    <>
    <Box minHeight={"80%"} minWidth={"60%"} bg={"white"} display={"flex"} border={"5px solid grey "}>

<Box width={"50%"} bg={"limegreen"} >

</Box>
<Box width={"50%"} bg={"white"} display={"flex"} justifyContent={"center"} alignItems={"center"} >
    <Box width={"80%"} height={"80%"} display={"flex"} flexDirection={"column"}>
        <Box display={"flex"} flexDirection={"column"}>
            <Heading>Register</Heading>
            {/* <Text>Login to page</Text> */}
        </Box>
        <Box marginTop={10} display={"flex"} flexDirection={"column"} gap={6}>
        <Box>
                <FormLabel>Full Name</FormLabel>
                <Input variant='filled' placeholder='E-mail' />
            </Box>
            <Box>
                <FormLabel>E-mail</FormLabel>
                <Input variant='filled' placeholder='E-mail' />
            </Box>
            <Box>
                <FormLabel>Password</FormLabel>
                <Input variant='filled' placeholder='Password' type='password' />
            </Box>
            <Box>
                <FormLabel>Conform Password</FormLabel>
                <Input variant='filled' placeholder='conform Password' type='password' />
            </Box>
            <Box display={"flex"}>
                <Text>i have already account..</Text>
        <Link to={"/"}>
        Login
        </Link>
      </Box>
            
            <Box>
                <Button variant={"outline"} width={"100%"} colorScheme='blue'>submit</Button>
            </Box>
            

        </Box>
    </Box>

</Box>
</Box>
    </>
  )
}
