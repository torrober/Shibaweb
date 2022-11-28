import { UserContext } from "../../context/UserContext";
import login_bg from "../../assets/img/login.jpg";
import Header from "../../content/Header";
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
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";
import API from "../../api/API";
import { Link } from "react-router-dom";
export default function Schedule() {
  const userActive = useContext(UserContext);
  const [services, setServices] = useState<any[]>([]);
  useEffect(() => {
    const api = new API();
    api.getAllServices(userActive?.userActive?.userType).then((data) => {
      if (data.response == "failed") {
      } else {
        let servTemp = data.content.filter(
          (serv: { done: any }) => serv.done != "1"
        );
        setServices(servTemp);
        //setServices(data.content)
      }
    });
  }, []);
  const handleService = (id: any, done: any, paid: any,i:any) => {
    const api = new API();
    api.updateService(id, done, paid).then((data) => {
      if (data.response == "failed") {
      } else {
        alert("Marcado como terminado.");
        let temp = services.splice(0, i).concat(services.slice(i + 1));
        setServices(temp)
      }
    });
  };
  return (
    <>
      <Center
        bgImage={login_bg}
        bgRepeat="no-repeat"
        bgPosition="center"
        bgSize="cover"
        h="100px"
        w="100vw"
      >
        <Box>
          <Heading color="white">Mi horario</Heading>
        </Box>
      </Center>
      <Accordion>
        {services.map((data,i) => (
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  {data.date} - {data.serviceType}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Link to={"/vet/record/" + data.petID}>
                <Heading>{"Paciente #" + data.petID} - Ver más</Heading>
              </Link>
              <br></br>
              <Button
                onClick={(e) => handleService(data.ID, 1, 0,i)}
                colorScheme="red"
              >
                Marcar servicio como terminado
              </Button>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
