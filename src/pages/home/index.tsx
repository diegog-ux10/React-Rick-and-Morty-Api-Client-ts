import { Button, Container } from "@mui/material";
import React from "react";
import { useNotifiacion } from "../../context/notification.context";

export const HomePage: React.FC<{}> = () => {
  return (
    <Container sx={{ mt: 9 }} maxWidth="xl">
      <Button variant="contained">Hola Mundo</Button>
    </Container>
  );
};
