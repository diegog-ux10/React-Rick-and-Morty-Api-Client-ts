import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNotifiacion } from "../../context/notification.context";
import { LoginValidate } from "../../utils/validateForm";

type LoginDataType = {
  username: string;
  password: string;
};

export const LoginPage: React.FC<{}> = () => {
  const { getError, getSuccess } = useNotifiacion();
  const [loginData, setLoginData] = useState<LoginDataType>({
    username: "",
    password: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
    console.log(loginData);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    LoginValidate.validate(loginData)
      .then(() => {
        getSuccess(`Hola ${loginData.username}`);
      })
      .catch((err) => {
        getError(err.message);
      });
  };

  return (
    <Container maxWidth="xl">
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
      >
        <Grid item>
          <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
            <Typography variant="h4">Iniciar Sesion</Typography>
            <Box component="form" onSubmit={handleSubmit}>
              <Stack spacing={2} sx={{ mt: 2, mb: 1.5 }}>
                <TextField
                  fullWidth
                  label="Email"
                  name="username"
                  onChange={handleInputChange}
                />
                <TextField
                  type="password"
                  fullWidth
                  label="Password"
                  name="password"
                  onChange={handleInputChange}
                />
              </Stack>
              <Button fullWidth type="submit" variant="contained">
                Iniciar Sesion
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
