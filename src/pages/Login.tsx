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
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api/API";
import { UserContext } from "../context/UserContext";
import { useNavigate } from 'react-router-dom';
import { userContext } from "../userContext";

export default function Login() {
  //getters and setters 
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const userActive = useContext(UserContext)
  const history = useNavigate();
  const handleForm = () => {
    if(user == '' || password == '') {
      alert('Revise el formulario, faltan datos');
    } else {
      const api = new API();
      api.checkUser(user,password).then( (data) => {
        if(data.response == "failed") {
          alert("Ha ocurrido un error al iniciar sesión. Por favor revise su contraseña o usuario");
        } else {
          alert("Bienvenido a shibavet!");
          userActive?.setUserActive(data.content)
          history('/main');
        }
      });
    }
  }
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
                <Input type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)}></Input>
              </FormControl>
              <FormControl>
                <FormHelperText textAlign="center">
                    <Link to="/signup">¿No tiene cuenta? Registrese aquí</Link>
                </FormHelperText>
              </FormControl>
              <Button width="full" onClick={(e) => handleForm()}>Ingresar</Button>
            </Stack>
          </form>
        </Box>
      </Center>
  );
}