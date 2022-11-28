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
import { Link, useParams } from "react-router-dom";
export default function Cashier() {
  const params = useParams();
  const userActive = useContext(UserContext);
  const [services, setServices] = useState<any[]>([]);
  const [cashier, setCashier] = useState<any[]>([]);
  useEffect(() => {
    const api = new API();
    api.getAllServices(userActive?.userActive?.userType).then((data) => {
      if (data.response == "failed") {
      } else {
        let servTemp = data.content.filter(
          (serv: { paid: any; ownerID: any }) =>
            serv.paid != "1" && serv.ownerID == params.id
        );
        setServices(servTemp);
      }
    });
  }, []);
  const getPrice = (service:any) => {
    let total = 0;
    switch (service) {
      case "Consulta":
          total = 60000;
          break;
      case "Control":
          total = 10000;
          break;
      case "Desparasitación":
          total = 40000;
          break;
      case "Vacunación":
          total = 35000;
          break;
      case "Guarderia":
          total = 35000;
          break;
      case "Radiologia":
          total = 100000;
          break;
      case "Baño":
          total = 25000;
          break;
  }
  return total;
  }
  const handleService = (done: any, paid: any, i: any, data: any, price: any) => {
    const api = new API();
    let promptValue = prompt('Ingrese efectivo', '')!;  
    if(parseInt(promptValue) >= price) {
      api.updateService(data.ID, done, paid).then((data) => {
        if (data.response == "failed") {
        } else {
          alert('pagado, vuelto $'+(parseInt(promptValue) - price))
          let temp = services.splice(0, i).concat(services.slice(i + 1));
          setServices(temp);
        }
      });
    } else {
      alert('Insuficiente');
    }
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
          <Heading color="white">Edición y creación de servicios</Heading>
        </Box>
      </Center>
      <Stack spacing={4} p="6" m="6">
      <Accordion>
        {services.map((data, i) => (
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
              <Heading>{"Paciente #" + data.petID}</Heading>
              <br></br>
              <p>{"$ "+getPrice(data.serviceType)}</p>
              <br></br>
              <Button
                onClick={(e) => handleService(1, 1, i, data, getPrice(data.serviceType))}
                colorScheme="green"
              >
                Pagar
              </Button>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
      </Stack>
    </>
  );
}
