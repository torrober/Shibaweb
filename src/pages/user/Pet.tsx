import { Box, Center, Heading, Stack } from "@chakra-ui/react";
import { useContext } from "react";
import Header from "../../content/Header";
import MyPets from "../../content/MyPets";
import { UserContext } from "../../context/UserContext";
import login_bg from "../../assets/img/login.jpg";

export default function Pets() {
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
          <Heading color="white">Mis mascotas</Heading>
        </Box>
      </Center>
      <Stack spacing={4} p="6" m="6">
        <MyPets ownerID={userActive?.userActive?.id}></MyPets>
      </Stack>
    </>
  );
}
