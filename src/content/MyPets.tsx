import { Box, Button, Divider, Heading, Stack } from "@chakra-ui/react";
import React, { Component, useEffect, useState } from "react"; // let's also import Component
import API from "../api/API";
export default function MyPets(props: any) {
  const [pets, setPets] = useState<any[]>([]);
  useEffect(() => {
    const api = new API();
    api.getPetsByOwner(props.ownerID).then((data) => {
      if (data.response == "failed") {
      } else {
        setPets(data.content);
      }
    });
  }, []);
  return (
    <Box>
      {pets.map((pet) => (
        <Box w="100%" p="6" m="6" key={pet.id} borderRadius="md" boxShadow="lg">
          <Heading as="h3" size="md">
            {pet.name}
          </Heading>
          {pet.race}
          <Divider mt='6' mb='6'/>
          <Button colorScheme="blackAlpha" variant="ghost">
            Ver más
          </Button>
        </Box>
      ))}
      <Button ml="6" colorScheme="green">
        Añadir mascota
      </Button>
    </Box>
  );
}
