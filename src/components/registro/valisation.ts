// validation.ts

export interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  address: string;
  phone: string;
  country: string;
  city: string;
}

export const validateForm = (formData: FormData) => {
  const newErrors: Record<string, string> = {};

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    newErrors.email = "El correo electrónico no tiene un formato válido.";
  }

  // Validación del teléfono
  const phoneRegex = /^[0-9]+$/;
  if (!phoneRegex.test(formData.phone)) {
    newErrors.phone = "El teléfono debe contener solo números.";
  }

  // Validación de la contraseña
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,15}$/;
  if (!passwordRegex.test(formData.password)) {
    newErrors.password =
      "La contraseña debe contener al menos una letra minúscula, una letra mayúscula, un número y un carácter especial (!@#$%^&*), y tener una longitud entre 8 y 15 caracteres.";
  }

  // Validación de confirmación de contraseña
  if (formData.password !== formData.confirmPassword) {
    newErrors.confirmPassword = "Las contraseñas no coinciden.";
  }

  return newErrors;
};
