import { Box, Button, Divider, Heading, Stack } from "@chakra-ui/react";
import React, { Component, useEffect, useState } from "react"; // let's also import Component
import { Link } from "react-router-dom";
import API from "../api/API";
export default function MyPets(props: any) {
  const [pets, setPets] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const deletePet = (id: any, name: any, i: any) => {
    if (confirm("De verdad deseas eliminar a " + name + "?")) {
      //codigo para eliminar mascota
      const APIdel = new API();
      APIdel.deletePet(id).then((data) => {
        if (data.response == "failed") {
          alert("Hubo un error al eliminar mascota");
        } else {
          alert("Mascota eliminada");
          let pettemp = pets.splice(0, i).concat(pets.slice(i + 1));
          setPets(pettemp);
        }
      });
    }
  };
  useEffect(() => {
    const api = new API();
    api.getPetsByOwner(props.ownerID).then((data) => {
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
        <Box w="100%" p="6" m="6" key={pet.ID} borderRadius="md" boxShadow="lg">
          <Heading as="h3" size="md">
            {pet.name}
          </Heading>
          {pet.race}
          <Divider mt="6" mb="6" />
          <Link to={"/user/editpet/" + pet.ID}>
            <Button colorScheme="blackAlpha" variant="ghost">
              Editar
            </Button>
          </Link>
          <Button
            onClick={(e) => deletePet(pet.ID, pet.name, i)}
            colorScheme="red"
            variant="ghost"
          >
            Eliminar
          </Button>
        </Box>
      ))}
      {loading == false && (
        <Link to="/user/addpet">
          <Button width="full" ml="6" colorScheme="green">
            Añadir mascota
          </Button>
        </Link>
      )}
    </Box>
  );
}
