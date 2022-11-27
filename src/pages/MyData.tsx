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
} from "@chakra-ui/react";
import API from "../api/API";
import { Link } from "react-router-dom";
export default function MyData() {
  const userActive = useContext(UserContext);
  const [user, setUser] = useState(userActive?.userActive?.username!);
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState(
    userActive?.userActive?.firstName!
  );
  const [secondName, setSecondName] = useState(
    userActive?.userActive?.lastName!
  );

  const handleForm = () => {
    if (user == "" || firstName == "" || secondName == "") {
      alert("Revise el formulario, faltan datos");
    } else {
      const api = new API();
      api
        .changeUserData(user, firstName, secondName, userActive?.userActive?.id)
        .then((data) => {
          if (data.response == "failed") {
            alert("Error al cambiar datos");
          } else {
            alert("Se cambiaron los datos correctamente");
            const userChanges = {
              username: user!,
              firstName: firstName!,
              lastName: secondName!,
              userType: userActive?.userActive?.userType!,
              id: userActive?.userActive?.id!,
              birthDay: userActive?.userActive?.birthDay!,
            };
            userActive?.setUserActive(userChanges);
          }
        });
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
            placeholder="Usuario"
            onChange={(e) => setUser(e.target.value)}
            value={user}
          />
        </FormControl>
        <FormControl isRequired>
          <Input
            placeholder="Nombres"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
        </FormControl>
        <FormControl isRequired>
          <Input
            placeholder="Apellidos"
            onChange={(e) => setSecondName(e.target.value)}
            value={secondName}
          />
        </FormControl>
        <Stack>
          <Button onClick={(e) => handleForm()}>Editar datos</Button>

          <Button colorScheme="blue">
            <Link to="/ChangePassword">Cambiar contraseña</Link>
          </Button>
        </Stack>
      </Stack>
    </>
  );
}
