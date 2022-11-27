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
import { UserContext } from "../../context/UserContext";
export default function BookService() {
  const [pets, setPets] = useState<any[]>([]);
  const userActive = useContext(UserContext);
  const servicios = [
    "Consulta",
    "Control",
    "Desparasitación",
    "Vacunación",
    "Radiologia",
    "Baño",
  ];
  useEffect(() => {
    const api = new API();
    api.getPetsByOwner(userActive?.userActive?.id).then((data) => {
      if (data.response == "failed") {
      } else {
        setPets(data.content);
      }
    });
  }, []);
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
          <Heading color="white">Mis servicios</Heading>
        </Box>
      </Center>

      <Stack spacing={4} p="6" m="6">
        <Heading>Agregar servicio</Heading>
        <FormControl isRequired>
          <Input placeholder="Fecha del servicio" type="date" />
        </FormControl>
        <FormControl isRequired>
          <Select placeholder="Mascota">
            {pets.map((pet) => (
              <option value={pet.ID}>{pet.name}</option>
            ))}
          </Select>
        </FormControl>
        <FormControl isRequired>
          <Select placeholder="Servicio">
            {servicios.map((service) => (
              <option value={service}>{service}</option>
            ))}
          </Select>
        </FormControl>
        <Button colorScheme="blue">
            Agregar servicio
        </Button>
      </Stack>
    </>
  );
}
