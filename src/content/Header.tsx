import { Button, Flex, Heading, HStack } from "@chakra-ui/react";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
export default function Header() {
  const userActive = useContext(UserContext);
  const history = useNavigate();
  const logout = () => {
    userActive?.setUserActive(null);
    localStorage.removeItem('user');
    history("/login");
  };
  return (
    <Flex w="100%" px="6" py="5" align="center" justify="space-between" position="absolute">
      <Heading color="white" >
       Shibavet
      </Heading>
      <HStack>
        <Button onClick={logout} colorScheme='blackAlpha'>Cerrar Sesión</Button>
      </HStack>
    </Flex>
  );
}
