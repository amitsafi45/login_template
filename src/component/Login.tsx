import { AbsoluteCenter, Box, Button, Divider, FormLabel, Heading, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';

export const Login = () => {
    return (
        <>
            <Box minHeight={"80%"} minWidth={"60%"} bg={"white"} display={"flex"} border={"5px solid grey "}>

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
                                <Input variant='filled' placeholder='E-mail' />
                            </Box>
                            <Box>
                                <FormLabel>Password</FormLabel>
                                <Input variant='filled' placeholder='Password' type='password' />
                            </Box>
                            <Box>
                                <Link to="" >Forget Password?</Link>
                            </Box>
                            <Box>
                                <Button variant={"outline"} width={"100%"} colorScheme='blue'>Login</Button>
                            </Box>
                            <Box>
                                <Box position='relative' padding='9'>
                                    <Divider border={"1px solid black"} />
                                    <AbsoluteCenter bg='white' px='5'>
                                        or
                                    </AbsoluteCenter>
                                </Box>
                            </Box>
                            <Box>
                                <Link to="/register">
                                <Button variant={"outline"} width={"100%"} colorScheme='blue'>Register</Button>

                                </Link>
                            </Box>

                        </Box>
                    </Box>

                </Box>
            </Box>
        </>
    )
}
