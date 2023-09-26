import { AbsoluteCenter, Box, Button, Divider, FormControl, FormLabel, Heading, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { useForm } from 'react-hook-form';
import { Form, Link } from 'react-router-dom';
interface ILogin{
    email:string
    password:string
}
export const Login = () => {
    const { formState, register, handleSubmit } = useForm<ILogin>({
        defaultValues:{
            email:"",
            password:""
        },
        mode:"onBlur"
    })
    const {errors}=formState
   const onSubmit=(data:ILogin)=>{
    console.log(data),
    console.log("first")
   }
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
                            <form  onSubmit={handleSubmit(onSubmit)}>
                                <Box>
                                <FormLabel>E-mail</FormLabel>
                                                                
                                   
                                    <Input  autoComplete="off" variant='filled' placeholder='E-mail' id='email' type='email' {...register("email",{
                                        required:"Email Address is required" 
                                        
                                    })}/>
                                     <h1>
                                    {errors&&errors.email?.message}
                                    </h1>     
                                </Box>
                                <Box>
                                    <FormLabel>Password</FormLabel>
                                    <Input variant='filled' placeholder='Password' type='password' id='password'{...register("password",{required:true})} />
                                </Box>
                                <Box>
                                    <Link to="" >Forget Password?</Link>
                                </Box>
                                <Box>
                                    <Button variant={"outline"} width={"100%"} colorScheme='blue' type='submit'>Login</Button>
                                </Box>
                                </form>
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
