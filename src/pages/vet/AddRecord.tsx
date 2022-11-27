import { useContext, useEffect, useState } from "react";
import { Form, useParams } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import login_bg from "../../assets/img/login.jpg";
import {
  Center,
  Heading,
  Box,
  Stack,
  Button,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  FormControl,
  Input,
  Textarea,
} from "@chakra-ui/react";
import Header from "../../content/Header";
import API from "../../api/API";

export default function AddRecord() {
  const params = useParams();
  const userActive = useContext(UserContext);
  const [date, setDate] = useState("");
  const [sickness, setSickness] = useState("");
  const [report, setReport] = useState("");
  const handleForm = () => {
    if(date == '' || sickness == '' || report ==  '') {
        alert('Revise el formulario, faltan datos');
    } else {
        const api = new API();
        api.createRecord(date,params.petID,userActive?.userActive?.id,sickness,report).then((data)=> {
            if(data.response == "failed") {
                alert("Ha ocurrido un error al registrar reporte");
              } else {
                alert("Reporte añadido");
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
          <Heading color="white">Añadir registro</Heading>
        </Box>
      </Center>
      <Stack spacing={4} p="6" m="6">
        <FormControl isRequired>
          <Input
            placeholder="Fecha del reporte"
            onChange={(e) => setDate(e.target.value)}
            value={date}
            type="date"
          />
        </FormControl>
        <FormControl isRequired>
          <Input
            placeholder="Enfermedad"
            onChange={(e) => setSickness(e.target.value)}
            value={sickness}
          />
        </FormControl>
        <FormControl isRequired>
          <Textarea
            placeholder="Detalles del reporte"
            onChange={(e) => setReport(e.target.value)}
            value={report}
          ></Textarea>
        </FormControl>
        <Button colorScheme="blue" onClick={(e) => handleForm()}>Añadir reporte</Button>
      </Stack>
    </>
  );
}
