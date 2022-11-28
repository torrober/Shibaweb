import { UserContext } from "../context/UserContext";
import login_bg from "../assets/img/login.jpg";
import Header from "../content/Header";
import { useContext, useEffect, useState } from "react";
import {
  Center,
  Heading,
  Box,
  Stack,
  Button,
  FormControl,
  FormHelperText,
  Input,
  Link,
} from "@chakra-ui/react";
import API from "../api/API";
export default function ChangePassword() {
  const userActive = useContext(UserContext);
  const user = userActive?.userActive?.username;
  const [ID, setID] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const handleForm = () => {
    if (ID == "" || password == "" || passwordRepeat == "") {
      alert("Revise el formulario, faltan datos");
    } else {
      if (ID == userActive?.userActive?.id) {
        if (password == passwordRepeat) {
          const api = new API();
          api.changePassword(user, password, ID).then((data) => {
            if (data.response == "failed") {
              alert("Error al cambiar contraseña");
            } else {
              alert("Contraseña cambiada exitosamente");
            }
          });
        } else {
          alert("Contraseñas no coinciden");
        }
      } else {
        alert("Cedula incorrecta.");
      }
    }
  };
  return (
    <>
      <Header></Header>
      <Center
        bgImage={login_bg}
        bgRepeat="no-repeat"
        bgPosition="center"
        bgSize="cover"
        h="100px"
        w="100vw"
      >
        <Box>
          <Heading color="white">Mis datos</Heading>
        </Box>
      </Center>
      <Stack spacing={4} p="1rem" borderRadius="md" bgColor="white">
        <FormControl isRequired>
          <Input
            placeholder="Cedula"
            onChange={(e) => setID(e.target.value)}
            value={ID}
            type="number"
          />
        </FormControl>
        <FormControl isRequired>
          <Input
            placeholder="Nueva contraseña"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
          />
        </FormControl>
        <FormControl isRequired>
          <Input
            placeholder="Repetir contraseña"
            onChange={(e) => setPasswordRepeat(e.target.value)}
            value={passwordRepeat}
            type="password"
          />
        </FormControl>
        <Stack>
          <Button onClick={(e) => handleForm()} colorScheme="blue">
            Cambiar contraseña
          </Button>
        </Stack>
      </Stack>
    </>
  );
}
