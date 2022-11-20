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
  import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api/API";
import User from "../objects/User";
import { UserContext } from "../context/UserContext";
  
  export default function Signup() {
  //getters and setters 
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const userActive = useContext(UserContext)
  const [id,setID] = useState('');
  const [bday,setBday] = useState('');
  const history = useNavigate();
  const handleForm = () => {
    if(user == '' || password == '' || firstName == '' || secondName == '' || id == '' || bday == '') {
      alert('Revise el formulario, faltan datos');
    } else {
      const api = new API();
      let newUser = new User(user,password,firstName,secondName,id,bday);
      api.createUser(newUser, 1).then( (data) => {
        if(data.response == "failed") {
          alert("Ha ocurrido un error al registrarse, puede que ya tenga usuario en la plataforma.");
        } else {
          alert("Bienvenido a shibavet, ahora puede registrarse");
          history('/login');
        }
      });
    }
  }
  useEffect(() => {
    if(userActive?.userActive) {
      history('/');
    }
  });
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
                  <Input placeholder="Usuario" onChange={(e) => setUser(e.target.value)}/>
                </FormControl>
                <FormControl isRequired>
                  <Input type="password"  onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña"></Input>
                </FormControl>
                <FormControl isRequired>
                  <Input placeholder="Nombres" onChange={(e) => setFirstName(e.target.value)} />
                </FormControl>
                <FormControl isRequired>
                  <Input placeholder="Apellidos" onChange={(e) => setSecondName(e.target.value)}/>
                </FormControl>
                <FormControl isRequired>
                  <Input type="number" placeholder="Cedula" onChange={(e) => setID(e.target.value)}/>
                </FormControl>  
                <FormControl isRequired>
                  <Input type="date" placeholder="Fecha de Nacimiento" onChange={(e) => setBday(e.target.value)}/>
                </FormControl>                                  
                <FormControl>
                  <FormHelperText textAlign="center">
                      <Link to="/login">¿Ya tiene cuenta? Ingrese aquí</Link>
                  </FormHelperText>
                </FormControl>
                <Button width="full"  onClick={(e) => handleForm()}>Registrarse</Button>
              </Stack>
            </form>
          </Box>
        </Center>
    );
  }