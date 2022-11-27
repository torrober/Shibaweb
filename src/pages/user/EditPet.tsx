import { Box, Button, Center, FormControl, Heading, Input, Stack } from "@chakra-ui/react";
import Header from "../../content/Header";
import { UserContext } from "../../context/UserContext";
import login_bg from "../../assets/img/login.jpg";
import { useContext, useEffect, useState } from "react";
import API from "../../api/API";
import Pet from "../../objects/Pet";
import { useParams } from "react-router-dom";
export default function EditPet() {
  const userActive = useContext(UserContext);
  const params = useParams();
  const petID = params.petID;
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
        pet.id = petID!
        api.editPet(pet).then((data)=> {
            if(data.response == "failed") {
                alert("Ha ocurrido un error al editar mascota");
              } else {
                alert("Mascota editada");
              }
        })
    }
  }
  useEffect(() => {
    const api = new API();
    api.getPetByID(petID).then((data) => {
      if (data.response == "failed") {
      } else {
        setName(data.content.name);
        setRace(data.content.race);
        setAge(data.content.age);
        setSex(data.content.sex);
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
          <Heading color="white">Editar mascota</Heading>
        </Box>
      </Center>
      <form>
        <Stack spacing={4} p="6" m="6" >
          <FormControl isRequired>
            <Input
              placeholder="Nombre"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </FormControl>
          <FormControl isRequired>
            <Input
              placeholder="Raza"
              onChange={(e) => setRace(e.target.value)}
              value={race}
            />
          </FormControl>
          <FormControl isRequired>
            <Input
              placeholder="Edad"
              type="number"
              onChange={(e) => setAge(e.target.value)}
              value={age}
            />
          </FormControl>
          <FormControl isRequired>
            <Input
              placeholder="Sexo"
              onChange={(e) => setSex(e.target.value)}
              value={sex}
            />
          </FormControl>
          <Button width="full" onClick={(e) => handleForm()}>Editar mascota</Button>
        </Stack>
      </form>
    </>
  );
}
