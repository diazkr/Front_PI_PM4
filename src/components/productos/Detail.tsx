"use client";
import { ProductInterface } from "@/interfaces/ProductoInterface";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Button,
  Rating,
  Snackbar,
} from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useCarrito } from "../contextos/CarritoContext";
import { useAuth } from "../contextos/AuthContext";
import LoginModal from "../carrito/LoginModal";

const Detail: React.FC<ProductInterface> = ({
  id,
  name,
  description,
  price,
  imgUrl,
  rate,
  stock,
  category,
}) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const { addToCarrito } = useCarrito();
  const { loggedIn } = useAuth();
  const [openModal, setOpenModal] = useState(false);
  const handleSizeClick = (size: string) => {
    setSelectedSize(size);
  };

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
  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <div className="flex flex-col justify-center p-8 md:flex-row md:h-[85vh] min-h-auto">
      <div className="h-full max-w-[600px] overflow-hidden">
        <Image
          src={imgUrl}
          alt=""
          layout="responsive"
          width={500}
          height={2000}
          objectFit="contain"
        />
      </div>
      <div className="py-8 p-6 w-full md:w-1/4">
        <div className=" flex justify-center">
          <Image src="/logos/Logorosa.svg" alt="" width={60} height={500} />
        </div>

        <p className=" text-xl font-bold text-[#282222] py-2">{name}</p>
        <p className=" text-xs font-light">item: {id}</p>

        <p className="py-4 text-base font-medium text-[#282222] ">$ {price}</p>
        <Rating name="size-medium" defaultValue={rate} />
        <p className="font-medium py-1 text-[#282222] ">Talla</p>
        <div className="flex justify-around py-2">
          <Button
            variant="outlined"
            onClick={() => handleSizeClick("S")}
            color={selectedSize === "S" ? "secondary" : "primary"}
            sx={{
              borderRadius: 0,
              padding: "4px 16px",
              minWidth: 0,
              minHeight: 0,
            }}
          >
            S
          </Button>
          <Button
            variant="outlined"
            onClick={() => handleSizeClick("M")}
            color={selectedSize === "M" ? "secondary" : "primary"}
            sx={{
              borderRadius: 0,
              padding: "4px 16px",
              minWidth: 0,
              minHeight: 0,
            }}
          >
            M
          </Button>
          <Button
            variant="outlined"
            onClick={() => handleSizeClick("L")}
            color={selectedSize === "L" ? "secondary" : "primary"}
            sx={{
              borderRadius: 0,
              padding: "4px 16px",
              minWidth: 0,
              minHeight: 0,
            }}
          >
            L
          </Button>
          <Button
            variant="outlined"
            onClick={() => handleSizeClick("XL")}
            color={selectedSize === "XL" ? "secondary" : "primary"}
            sx={{
              borderRadius: 0,
              padding: "4px 16px",
              minWidth: 0,
              minHeight: 0,
            }}
          >
            XL
          </Button>
        </div>
        <Button
          className="my-4 py-2 w-full"
          variant="contained"
          color="secondary"
          disabled={!selectedSize}
          onClick={handleAddToCart}
          sx={{
            borderRadius: 0,
            padding: "4px 16px",
            minWidth: 0,
            minHeight: 0,
          }}
        >
          {!selectedSize ? "Selecciona una talla" : "Agregar a la bolsa"}
        </Button>
        <Accordion
          sx={{
            borderRadius: 0,
            backgroundColor: "inherit", // Para mantener el mismo color de fondo
            boxShadow: "none",
            "&:before": {
              display: "none",
            },
            "&.MuiAccordion-root:before": {
              display: "none",
            },
            borderBottom: "1px solid #ccc", // Línea de separación debajo del acordeón
            width: "100%",
          }}
        >
          <AccordionSummary
            expandIcon={<IoIosArrowDown />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{
              padding: 0,
              "& .MuiAccordionSummary-content": {
                margin: 0,
              },
            }}
          >
            Descripción
          </AccordionSummary>
          <AccordionDetails>{description}</AccordionDetails>
        </Accordion>

        <Accordion
          sx={{
            borderRadius: 0,
            backgroundColor: "inherit", // Para mantener el mismo color de fondo
            boxShadow: "none",
            "&:before": {
              display: "none",
            },
            "&.MuiAccordion-root:before": {
              display: "none",
            },
            borderBottom: "1px solid #ccc", // Línea de separación debajo del acordeón
          }}
        >
          <AccordionSummary
            expandIcon={<IoIosArrowDown />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{
              padding: 0,
              "& .MuiAccordionSummary-content": {
                margin: 0,
              },
            }}
          >
            Envios
          </AccordionSummary>
          <AccordionDetails
            sx={{
              whiteSpace: "pre-wrap", // Para asegurar que el texto se ajuste dentro del contenedor
            }}
          >
            Envíos gratis a Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Placeat voluptatem odio ipsam delectus veniam qui dolor.
            Rerum, dolorem. Quam labore architecto voluptatem. Reiciendis quae
            tenetur dolores dolore, earum mollitia a.
          </AccordionDetails>
        </Accordion>
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
    </div>
  );
};

export default Detail;
