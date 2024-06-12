"use client"
import React, { useEffect, useState } from "react";
import { ProductInterface } from "@/interfaces/ProductoInterface";
import CarritoList from "@/components/carrito/CarritoList";
import { Button, TextField } from "@mui/material";
import SummaryCard from "@/components/carrito/SummaryCard";
import { PiSmileySad } from "react-icons/pi";
import { useRouter } from "next/navigation";
import { useCarrito } from "@/components/contextos/CarritoContext";

const CarritoPage = () => {
  const { carrito } = useCarrito();
  const router = useRouter()

  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const calculatedSubtotal = carrito.reduce((sum, product) => sum + parseFloat(product.price.toString()), 0);
    setSubtotal(calculatedSubtotal);
  }, [carrito]);

  return (
    <div className="my-16 flex flex-col justify-center items-center">
      {carrito.length > 0 ? (
      <>
      <div className="flex flex-col justify-center items-center">
        <p className=" text-lg font-semibold text-[#282222] ">
          Bolsa de compra
        </p>
        <p className="text-sm  text-[#282222]">
          Los articulos de tu bolsa no estan reservados. Finaliza tu compra para
          asegurarlos
        </p>
      </div>
      <CarritoList products={carrito} />

      <div className="flex w-7/12 justify-start items-start gap-4 my-6">
      
        <div className="flex flex-col w-[50%] px-12">
          <label className="text-gray-700 py-2">
            ¿Tienes un código de descuento?
          </label>
          <div className="">
          <TextField
            variant="outlined"
            placeholder="Código"
            className="flex-1 w-[60%]"
            sx={{
                '& .MuiOutlinedInput-input': {
                  padding: '0.5em 1em', 
                },
              }}
          />
          <Button
            variant="contained"
            color="primary"
            className="bg-[#9F5650] text-white ml-2"
            
          >
            Aplicar
          </Button>

          </div>
          
        </div>
        <div className="w-[50%]">
            <SummaryCard total={subtotal} subtotal={subtotal}/>
        </div>
        </div>
      </>
      ):(<div className="flex flex-col justify-center items-center">

        <PiSmileySad  className=" text-9xl text-gray-500"/>
        <p className=" text-2xl font-semibold text-gray-500 ">
          Tu bolsa de compras esta vacia
        </p>
        <p className=" text-lg font-semibold text-gray-400 ">
          Para seguir comprando, navega por las categorias del sitio o busca tu producto
        </p>
        <button onClick={()=> router.push("/")} className="bg-[#282222] text-white py-1 px-4 m-4  font-medium shadow-md">Volver al Home</button>
      </div>)}
      
      
    </div>
  );
};

export default CarritoPage;
