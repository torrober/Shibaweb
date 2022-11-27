import { Box, Center, Heading, Stack } from "@chakra-ui/react";
import { useContext } from "react";
import Header from "../../content/Header";
import AllPets from "../../content/AllPets";
import { UserContext } from "../../context/UserContext";
import login_bg from "../../assets/img/login.jpg";

export default function Patients() {
  const userActive = useContext(UserContext);
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
          <Heading color="white">Mis pacientes</Heading>
        </Box>
      </Center>
      <Stack spacing={4} p="6" m="6">
        <AllPets></AllPets>
      </Stack>
    </>
  );
}
