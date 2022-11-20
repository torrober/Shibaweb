import {
    Box,
    Button,
    Center,
    Flex,
    Grid,
    GridItem,
    Heading,
    HStack,
    Spacer,
    Square,
    Stack,
    Text,
  } from "@chakra-ui/react";
  import { useContext } from "react";
  import { useNavigate } from "react-router-dom";
  import { UserContext } from "../context/UserContext";
  import login_bg from "../assets/img/login.jpg";
  import Header from "../content/Header";
  import { Gradients } from "../components/Gradients";
  import MyPets from "../content/MyPets";
  import shiba_icon from "../assets/img/icons8-shiba-inu-96.png";
  import services_icon from "../assets/img/outline_medical_services_black_48dp.png";
  import account_icon from "../assets/img/outline_manage_accounts_white_48dp.png";
  export default function MainVet() {
    const userActive = useContext(UserContext);
    const history = useNavigate();
    const logout = () => {
      userActive?.setUserActive(null);
      history("/login");
    };
    const gradient1 = `linear(to-b, ${Gradients.blue.startColor}, ${Gradients.blue.endColor})`;
    const gradient2 = `linear(to-b, ${Gradients.orange.startColor}, ${Gradients.orange.endColor})`;
    const gradient3 = `linear(to-b, ${Gradients.rose.startColor}, ${Gradients.rose.endColor})`;
    return (
      <>
        <Header></Header>
        <Center
          bgImage={login_bg}
          bgRepeat="no-repeat"
          bgPosition="center"
          bgSize="cover"
          h="200px"
          w="100vw"
        >
          <Box>
            <Heading color="white">
              ¡Bienvenido, {userActive?.userActive?.firstName}!
            </Heading>
          </Box>
        </Center>
        <Center>
          <Stack spacing="20px" m="6" direction="row">
            <Square
              size="200px"
              borderRadius="md"
              boxShadow="lg"
              bgGradient={gradient1}
              cursor="pointer"
            >
              <Stack w="100%" align="center">
                <Text align="center">
                  <img src={shiba_icon}></img>
                </Text>
                <Text fontSize="2xl" color="white" align="center">
                  Mis pacientes
                </Text>
              </Stack>
            </Square>
            <Spacer />
            <Square
              size="200px"
              borderRadius="md"
              boxShadow="lg"
              bgGradient={gradient2}
              cursor="pointer"
            >
              <Stack w="100%" align="center">
                <Text align="center">
                  <img src={services_icon}></img>
                </Text>
                <Text fontSize="2xl" color="white" align="center">
                  Mi horario
                </Text>
              </Stack>
            </Square>
            <Spacer />
            <Square
              size="200px"
              borderRadius="md"
              boxShadow="lg"
              bgGradient={gradient3}
              cursor="pointer"
            >
              <Stack w="100%" align="center">
                <Text align="center">
                  <img src={account_icon}></img>
                </Text>
                <Text fontSize="2xl" color="white" align="center">
                  Mis datos
                </Text>
              </Stack>
            </Square>
          </Stack>
        </Center>
      </>
    );
  }
  