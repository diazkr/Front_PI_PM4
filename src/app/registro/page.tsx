"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Grid,
  Divider,
  InputAdornment,
  Snackbar,
  Alert,
} from "@mui/material";
import {
  FaUser,
  FaEnvelope,
  FaHome,
  FaPhone,
  FaGlobe,
  FaCity,
  FaLock,
} from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Importar la función de validación
import { FormData, validateForm } from "@/components/registro/valisation";

const RegistrationForm: React.FC = () => {
  const router = useRouter();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    phone: "",
    country: "",
    city: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touchedFields, setTouchedFields] = useState<Record<string, boolean>>(
    {}
  );
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const newErrors = validateForm(formData);
    setErrors(newErrors);
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (touchedFields[name]) {
      const newErrors = validateForm({ ...formData, [name]: value });
      setErrors(newErrors);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouchedFields((prev) => ({
      ...prev,
      [name]: true,
    }));
    const newErrors = validateForm(formData);
    setErrors(newErrors);
  };

  const phoneNumber = parseFloat(formData.phone);
  const formDataWithNumberPhone = {
    ...formData,
    phone: phoneNumber,
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await fetch(`${apiUrl}/auth/singUp`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formDataWithNumberPhone),
        });
        const data = await response.json();
        if (data.success) {
          setOpenSnackbar(true);
          setTimeout(() => {
            router.push("/login");
          }, 2000);
        } else {
          console.error("Registro fallido:", data);
        }
      } catch (error) {
        console.error("Error en registro:", error);
      }
    }
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
          src="/hero.jpg"
          alt="Hero Image"
          quality={100}
          fill
          style={{ objectFit: "cover", objectPosition: "top", zIndex: -1 }}
        />
      </div>
      <Container component="main" maxWidth="sm" className="flex-col mb-12">
        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          className="bg-red-50 bg-opacity-40 backdrop-blur-xl p-8 rounded-lg mt-24"
        >
          <Typography component="h1" variant="h5" sx={{ fontWeight: 600 }}>
            Registro
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="Nombre Completo"
                  name="name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  InputProps={{
                    startAdornment: formData.name && (
                      <InputAdornment position="start">
                        <FaUser />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
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
                  onBlur={handleBlur}
                  InputProps={{
                    startAdornment: formData.email && (
                      <InputAdornment position="start">
                        <FaEnvelope />
                      </InputAdornment>
                    ),
                  }}
                  error={touchedFields.email && !!errors.email}
                  helperText={touchedFields.email && errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="address"
                  label="Dirección"
                  name="address"
                  autoComplete="address"
                  value={formData.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  InputProps={{
                    startAdornment: formData.address && (
                      <InputAdornment position="start">
                        <FaHome />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  label="Teléfono"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  InputProps={{
                    startAdornment: formData.phone && (
                      <InputAdornment position="start">
                        <FaPhone />
                      </InputAdornment>
                    ),
                  }}
                  error={touchedFields.phone && !!errors.phone}
                  helperText={touchedFields.phone && errors.phone}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="country"
                  label="País"
                  name="country"
                  autoComplete="country"
                  value={formData.country}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  InputProps={{
                    startAdornment: formData.country && (
                      <InputAdornment position="start">
                        <FaGlobe />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="city"
                  label="Ciudad"
                  name="city"
                  autoComplete="city"
                  value={formData.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  InputProps={{
                    startAdornment: formData.city && (
                      <InputAdornment position="start">
                        <FaCity />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Divider sx={{ my: 2 }} />
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
                  onBlur={handleBlur}
                  InputProps={{
                    startAdornment: formData.password && (
                      <InputAdornment position="start">
                        <FaLock />
                      </InputAdornment>
                    ),
                  }}
                  error={touchedFields.password && !!errors.password}
                  helperText={touchedFields.password && errors.password}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirmar Contraseña"
                  type="password"
                  id="confirmPassword"
                  autoComplete="new-password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  InputProps={{
                    startAdornment: formData.confirmPassword && (
                      <InputAdornment position="start">
                        <FaLock />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
            {touchedFields.confirmPassword && errors.confirmPassword && (
              <Grid item xs={12}>
                <div className="text-red-900 px-6 py-1" style={{ color: "red" }}>{errors.confirmPassword}</div>
              </Grid>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              sx={{ mt: 3, mb: 2 }}
              disabled={Object.keys(errors).length > 0}
            >
              Registrarme
            </Button>
          </Box>
          <div className="flex justify-end items-end w-full">
            <p className="text-sm">¿Ya tienes cuenta?</p>
            <button className="px-2 font-semibold text-[#9F5650] text-sm">
              Inicia sesión
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
          Registro exitoso
        </Alert>
      </Snackbar>
    </div>
  );
};

export default RegistrationForm;
