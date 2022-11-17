import { Box, Button, Center, Flex, Heading, HStack, Spacer } from "@chakra-ui/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import login_bg from "../assets/img/login.jpg";
import Header from "../content/Header";
import GradientButton from "../components/GradientButton";
import { Gradients } from "../components/Gradients";

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
        h="50vh"
        w="100vw"
      >
        <Box>
          <Heading color="white">
            ¡Hola, {userActive?.userActive?.firstName}!
          </Heading>
        </Box>
      </Center>
      <Center h="50vh" w="100vw">
        <HStack spacing='25px'>
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
        </HStack>
      </Center>
    </>
  );
}
