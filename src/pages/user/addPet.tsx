import { Box, Button, Center, FormControl, Heading, Input, Stack } from "@chakra-ui/react";
import Header from "../../content/Header";
import { UserContext } from "../../context/UserContext";
import login_bg from "../../assets/img/login.jpg";
import { useContext, useState } from "react";
import API from "../../api/API";
import Pet from "../../objects/Pet";
export default function AddPet() {
  const userActive = useContext(UserContext);
  const [name, setName] = useState('')!
  const [race, setRace] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const handleForm = () => {
    if(name == '' || race == '' || sex ==  '' || age == '') {
        alert('Revise el formulario, faltan datos');
    } else {
        const api = new API();
        let pet = new Pet(name, race,age,sex,userActive?.userActive?.id);
        api.createPet(pet).then((data)=> {
            if(data.response == "failed") {
                alert("Ha ocurrido un error al registrar mascota");
              } else {
                alert("Mascota agregada");
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
          <Heading color="white">Añadir mascota</Heading>
        </Box>
      </Center>
      <form>
        <Stack spacing={4} p="6" m="6" >
          <FormControl isRequired>
            <Input
              placeholder="Nombre"
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <Input
              placeholder="Raza"
              onChange={(e) => setRace(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <Input
              placeholder="Edad"
              type="number"
              onChange={(e) => setAge(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <Input
              placeholder="Sexo"
              onChange={(e) => setSex(e.target.value)}
            />
          </FormControl>
          <Button width="full" onClick={(e) => handleForm()}>Añadir mascota</Button>
        </Stack>
      </form>
    </>
  );
}
