import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
} from "@chakra-ui/react";
import Header from "../../content/Header";
import API from "../../api/API";

export default function PetRecords() {
  const params = useParams();
  const userActive = useContext(UserContext);
  const [name, setName] = useState("")!;
  const [race, setRace] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [records, setRecords] = useState<any[]>([]);
  const [noReports, setNoReports] = useState(false);
  useEffect(() => {
    const api = new API();
    api.getPetByID(params.petID).then((data) => {
      if (data.response == "failed") {
      } else {
        setName(data.content.name);
        setRace(data.content.race);
        setAge(data.content.age);
        setSex(data.content.sex);
      }
    });
    api
      .getRecordsPet(userActive?.userActive?.userType, params.petID)
      .then((data) => {
        if (data.response == "failed") {
          if(data.error == "No reports found") {
            setNoReports(true);
          } 
        } else {
          setRecords(data.content);
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
          <Heading color="white">{name}</Heading>
        </Box>
      </Center>
      <Stack spacing={4} p="6" m="6">
        <Heading>Historial medico</Heading>
        <Link to={"/vet/addRecord/" + params.petID}>
          <Button colorScheme="green">Añadir reporte</Button>
        </Link>
        <Accordion>
          {records.map((data) => (
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    {data.date} - {data.sickness}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {data.details}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
        {noReports?
        <>No hay reportes para esta mascota.</>
        :<></>}
      </Stack>
    </>
  );
}
