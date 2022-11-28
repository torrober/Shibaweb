import login_bg from "../../assets/img/login.jpg";
import API from "../../api/API";
import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  Input,
  Select,
  Stack,
} from "@chakra-ui/react";
import Header from "../../content/Header";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function EnterId() {
  const [ID, setID] = useState("");
  const history = useNavigate();

  const handleForm = () => {
    if (ID == "") {
      alert("Revise el formulario, faltan datos");
    } else {
      history("/admin/cashier/" + ID);
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
          <Heading color="white">Edición y creación de servicios</Heading>
        </Box>
      </Center>
      <Stack spacing={4} p="6" m="6">
        <FormControl isRequired>
          <Input
            placeholder="Cedula del cliente"
            onChange={(e) => setID(e.target.value)}
            type="number"
          />
        </FormControl>
        <Button onClick={(e) => handleForm()} colorScheme="blue">
          Ir a caja
        </Button>
      </Stack>
    </>
  );
}
