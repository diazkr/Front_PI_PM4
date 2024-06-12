"use client"
import React, { useState } from 'react';
import { Alert, Button, Divider, Snackbar } from '@mui/material';
import { FaLock } from 'react-icons/fa';
import { FaCreditCard } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import { useCarrito } from '../contextos/CarritoContext';

interface SummaryCardProps {
  subtotal: number;
  total: number;
}
const getTokenFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    return token ? token : null;
  }
  return null;
};
const getCarritoFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const carrito = localStorage.getItem("carrito");
    return carrito ? JSON.parse(carrito) : [];
  }
  return [];
};

const getUserIdFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const userId = localStorage.getItem("userId");
    return userId ? userId : null;
  }
  return null;
};
const SummaryCard: React.FC<SummaryCardProps> = ({ subtotal, total }) => {

  const [openSnackbar,setOpenSnackbar]=useState(false)
  const { carrito, clearCarrito } = useCarrito();
  const router = useRouter()
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const handleOrder = async () => {
    const products = getCarritoFromLocalStorage().map((product: { id: string }) => ({ id: product.id }));
    const userId = getUserIdFromLocalStorage();
    const token = getTokenFromLocalStorage();

    const orderData = {
      products,
      userId,
    };

    try {
      const response = await fetch(`${apiUrl}/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          'ngrok-skip-bowser-warning':'true'
        },
        body: JSON.stringify(orderData),
      });
      const data = await response.json();

      if (response.ok) {
        clearCarrito(); 
        localStorage.removeItem('carrito');
        setOpenSnackbar(true);
        router.push(`/usuario/${userId}`);
        
      } else {
        console.error('Error al realizar la orden de compra:', data);
      }
    } catch (error) {
      console.error('Error en la solicitud de orden de compra:', error);
    }
  };
  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };
  return (
    <div className="p-4 w-[100%]">
      <div className="flex justify-between mb-4">
        <span className="text-gray-700">Subtotal</span>
        <span className="text-gray-700">${subtotal.toLocaleString()}</span>
      </div>

      <Divider className='w-full my-2'></Divider>
      <div className="flex justify-between mb-4">
        <span className="text-lg font-semibold">Total</span>
        <span className="text-lg font-semibold">${total.toLocaleString()}</span>
      </div>
      <Button
        variant="contained"
        color="primary"
        className="w-full bg-[#9F5650] text-white py-2 flex items-center justify-center"
        startIcon={<FaCreditCard />}
        onClick={handleOrder}
      >
        Realizar orden de compra
      </Button>

      <Snackbar open={openSnackbar} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}autoHideDuration={3000} onClose={handleSnackbarClose}>
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Orden creada con exito
        </Alert>
      </Snackbar>
    </div>
  );
};

export default SummaryCard;
