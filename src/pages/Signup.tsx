import {
    Box,
    Button,
    ButtonGroup,
    FormControl,
    FormHelperText,
    FormLabel,
    Heading,
    Input,
    Stack, 
    Center 
  } from "@chakra-ui/react";
  import login_bg from "../assets/img/login.jpg";
  import React from "react";
import { Link } from "react-router-dom";
  
  export default function Signup() {
    return (
        <Center
          bgImage={login_bg}
          bgRepeat="no-repeat"
          bgPosition="center"
          bgSize="cover"
          h="100vh"
          w="100vw"
        >
          <Box p="5" borderRadius="5px">
            <form>
              <Stack spacing={4} p="1rem" borderRadius="md" bgColor="white" boxShadow="md">
                <Heading as='h2' size='xl' pb="2rem" pt="2rem" textAlign="center">Shibavet</Heading>
                <FormControl isRequired>
                  <Input placeholder="Usuario" />
                </FormControl>
                <FormControl isRequired>
                  <Input type="password" placeholder="Contraseña"></Input>
                </FormControl>
                <FormControl isRequired>
                  <Input placeholder="Nombres" />
                </FormControl>
                <FormControl isRequired>
                  <Input placeholder="Apellidos" />
                </FormControl>
                <FormControl isRequired>
                  <Input type="number" placeholder="Cedula" />
                </FormControl>  
                <FormControl isRequired>
                  <Input type="date" placeholder="Fecha de Nacimiento" />
                </FormControl>                                  
                <FormControl>
                  <FormHelperText textAlign="center">
                      <Link to="/login">¿Ya tiene cuenta? Ingrese aquí</Link>
                  </FormHelperText>
                </FormControl>
                <Button width="full">Registrarse</Button>
              </Stack>
            </form>
          </Box>
        </Center>
    );
  }