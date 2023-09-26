import { Box, Button, FormLabel, Heading,  Input, Link, Text } from '@chakra-ui/react'
import React from 'react'

export const Login = () => {
    return (
        <>
            <Box minHeight={"80%"} minWidth={"60%"} bg={"white"} display={"flex"}  border={"5px solid grey "}>
                
                <Box width={"50%"} bg={"limegreen"} >
                   
                </Box>
                <Box width={"50%"} bg={"white"} display={"flex"} justifyContent={"center"} alignItems={"center"} >
                    <Box width={"80%"} height={"80%"} display={"flex"} flexDirection={"column"}>
                    <Box display={"flex"} flexDirection={"column"}>
                        <Heading>Login</Heading>
                        <Text>Login to page</Text>
                    </Box>
                    <Box marginTop={10} display={"flex"} flexDirection={"column"} gap={6}>
                        <Box>
                        <FormLabel>E-mail</FormLabel>
                        <Input variant='filled' placeholder='Filled'/>
                        </Box>
                        <Box>
                        <FormLabel>Password</FormLabel>
                        <Input variant='filled' placeholder='Filled' type='password'/>
                        </Box>
                        <Box>
                            <Link >Forget Password?</Link>
                        </Box>
                        <Box>
                            <Button variant={"outline"} width={"100%"} colorScheme='blue'>Login</Button>
                        </Box>
                        
                    </Box>
                    </Box>
                    
                </Box>
            </Box>
        </>
    )
}
