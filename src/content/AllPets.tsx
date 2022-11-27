import { Box, Button, Divider, Heading, Stack } from "@chakra-ui/react";
import React, { Component, useContext, useEffect, useState } from "react"; // let's also import Component
import { Link } from "react-router-dom";
import API from "../api/API";
import { UserContext } from "../context/UserContext";
export default function AllPets() {
  const userActive = useContext(UserContext);
  const [pets, setPets] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const api = new API();
    api.getAllPets('2').then((data) => {
      if (data.response == "failed") {
      } else {
        setPets(data.content);
        setLoading(false);
      }
    });
  }, []);
  return (
    <Box>
      {pets.map((pet, i) => (
        <Box  p="6" m="6" key={pet.ID} borderRadius="md" boxShadow="lg">
          <Heading as="h3" size="md">
            {pet.name}
          </Heading>
          {pet.race} - Mascota de {pet.ownerID}
          <Divider mt="6" mb="6" />
          <Link to={"/vet/record/" + pet.ID}>
            <Button colorScheme="blackAlpha" variant="ghost">
              Ver más
            </Button>
          </Link>
        </Box>
      ))}
    </Box>
  );
}
