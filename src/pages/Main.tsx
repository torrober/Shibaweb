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
  Stack,
} from "@chakra-ui/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import login_bg from "../assets/img/login.jpg";
import Header from "../content/Header";
import GradientButton from "../components/GradientButton";
import { Gradients } from "../components/Gradients";
import MyPets from "../content/MyPets";

export default function Main() {
  const userActive = useContext(UserContext);
  const history = useNavigate();
  const logout = () => {
    userActive?.setUserActive(null);
    history("/login");
  };
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
            ¡Hola, {userActive?.userActive?.firstName}!
          </Heading>
        </Box>
      </Center>
      <Center>
        <Stack direction="row" spacing={4}>
          <Stack spacing="20px" m="6" direction="row">
            <GradientButton
              text="Prueba"
              startColor={Gradients.blue.startColor}
              endColor={Gradients.blue.endColor}
            ></GradientButton>
            <Spacer />
            <GradientButton
              text="Prueba"
              startColor={Gradients.orange.startColor}
              endColor={Gradients.orange.endColor}
            ></GradientButton>
            <Spacer />
            <GradientButton
              text="Prueba"
              startColor={Gradients.rose.startColor}
              endColor={Gradients.rose.endColor}
            ></GradientButton>
          </Stack>
          <HStack w="100%">
            <Box>
              <Heading as="h4" m='6'>Mis mascotas</Heading>
              <MyPets ownerID={userActive?.userActive?.id}></MyPets>
            </Box>
          </HStack>
        </Stack>
      </Center>
    </>
  );
}
