"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Grid,
  InputAdornment,
  Snackbar,
  Alert,
} from "@mui/material";
import { FaEnvelope, FaLock } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/contextos/AuthContext";

const Login = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login } = useAuth();
  const router = useRouter(); // <--- Usar useRouter
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(`${apiUrl}/auth/signIn`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.userId);
        login();
        setOpenSnackbar(true);
        setTimeout(() => {
          router.push("/");
        }, 2000);
      } else {
        setErrorMessage(data.message || "Información incorrecta");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };
  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      >
        <Image
          src="/hero2.jpg"
          alt="Hero Image"
          quality={100}
          fill
          style={{ objectFit: "cover", objectPosition: "top", zIndex: -1 }}
        />
      </div>
      <Container component="main" maxWidth="xs" className="flex-col pt-8">
        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          className="bg-red-50 bg-opacity-40 backdrop-blur-lg p-8 rounded-lg mt-24"
        >
          <Typography component="h1" variant="h5" sx={{ fontWeight: 600 }}>
            Iniciar Sesión
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Correo Electrónico"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: formData.email && (
                      <InputAdornment position="start">
                        <FaEnvelope />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={formData.password}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: formData.password && (
                      <InputAdornment position="start">
                        <FaLock />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
            {errorMessage && (
              <Grid item xs={12}>
                <div  className=" text-red-900 p-1 text-sm" >{errorMessage}</div>
              </Grid>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className="my-3"
              

            >
              Ingresar
            </Button>
          </Box>

          <div className="flex justify-end items-end w-full">
            <p className="text-sm">No tienes cuenta?</p>

            <button
              className="px-2 font-semibold text-[#9F5650] text-sm"
              onClick={() => router.push("/registro")}
            >
              Registrate!
            </button>
          </div>
        </Box>
      </Container>
      <Snackbar
        open={openSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Inicio de sesión exitoso
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Login;
