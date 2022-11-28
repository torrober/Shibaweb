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
  const [pet, setPet] = useState('');
  const [ID, setID] = useState('');
  const userActive = useContext(UserContext);
  const [day,setDay] = useState('');
  const [service,setService] = useState('');
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
    api.getAllPets(userActive?.userActive?.userType).then((data) => {
      if (data.response == "failed") {
      } else {
        setPets(data.content);
      }
    });
  }, []);
  const handleForm = () => {
    if(day == '' ||  service == 'Servicio' || pet == 'Mascota - Cedula' || ID == '') {
        alert('Revise el formulario, faltan datos');
    } else {
        const api = new API();
        api.createService(day,service,ID,pet).then((data) => {
          if(data.response == 'failed') {
            alert('Fallo al insertar servicio')
          } else {
            alert('Servicio insertado')
          }
        })
    }
  }
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
        <Heading>Agregar servicio</Heading>
        <FormControl isRequired>
          <Input placeholder="Fecha del servicio" onChange={(e) => setDay(e.target.value)} type="date" />
        </FormControl>
        <FormControl isRequired>
          <Input placeholder="Cedula del cliente" onChange={(e) => setID(e.target.value)} type="number" />
        </FormControl>
        <FormControl isRequired>
          <Select placeholder="Mascota - Cedula" onChange={(e) => setPet(e.target.value)}>
            {pets.map((pet) => (
              <option value={pet.ID}>{pet.name} - {pet.ownerID}</option>
            ))}
          </Select>
        </FormControl>
        <FormControl isRequired>
          <Select placeholder="Servicio" onChange={(e) => setService(e.target.value)}>
            {servicios.map((service) => (
              <option value={service}>{service}</option>
            ))}
          </Select>
        </FormControl>
        <Button onClick={(e) => handleForm()} colorScheme="blue">
            Agregar servicio
        </Button>
      </Stack>
    </>
  );
}
