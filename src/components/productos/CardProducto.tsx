"use client";
import { ProductInterface } from "@/interfaces/ProductoInterface";
import { Alert, Button, Snackbar } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { RiShoppingBag4Line } from "react-icons/ri";
import { useCarrito } from "@/components/contextos/CarritoContext";
import { useAuth } from "../contextos/AuthContext";
import LoginModal from "../carrito/LoginModal";

const CardProducto: React.FC<ProductInterface> = ({
  id,
  name,
  description,
  price,
  imgUrl,
  stock,
  rate,
  category,
}) => {
  const { addToCarrito } = useCarrito();
  const { loggedIn } = useAuth();
  const [openModal, setOpenModal] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);


  const handleAddToCart = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    if (!loggedIn) {
      setOpenModal(true);
      return;
    }
    addToCarrito({
      id,
      name,
      description,
      price,
      imgUrl,
      stock,
      category,
      rate,
    });

    setOpenSnackbar(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };
  return (
    <>
    <Link href={`/producto/${id}`} passHref>
      <div key={id} className="border-[1px] border-slate-200 p-2">
        <div className="relative w-full h-[calc(100vh/2)]">
          <Image
            src={imgUrl}
            alt={name}
            fill
            style={{ objectFit: "cover", objectPosition: "top"}}
          />
        </div>
        <div className="flex justify-between p-2">
          <div>
            <h2 className="font-semibold">{name}</h2>
            <p className="text-sm"> $ {price}</p>
          </div>
          <Button
            variant="outlined"
            color="secondary"
            endIcon={<RiShoppingBag4Line />}
            onClick={handleAddToCart}
          >
            Agregar
          </Button>
        </div>
      </div>
      <LoginModal open={openModal} onClose={handleCloseModal} />
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
          Producto agregado
        </Alert>
      </Snackbar>
    </Link>


    </>
  );
};

export default CardProducto;
