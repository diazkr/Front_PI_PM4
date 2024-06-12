"use client"
import { ProductInterface } from "@/interfaces/ProductoInterface";
import { Button, IconButton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";
import { RiShoppingBag4Line } from "react-icons/ri";
import { useCarrito } from "../contextos/CarritoContext";

const CarritoCard: React.FC<ProductInterface> = ({
  id,
  name,
  description,
  price,
  imgUrl,
}) => {
  const [quantity, setQuantity] = useState(1);
  const { removeFromCarrito } = useCarrito();

  const handleRemove = () => {
    removeFromCarrito(id);
  };

  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };
  return (
    <div key={id} className=" flex  gap-12 justify-center items-center p-2 w-7/12 text-sm">
        <div className="w-1/8">
        <div className="relative w-24 h-24 flex-shrink-0">
        <Image
          src={imgUrl}
          alt={name}
          fill
          style={{ objectFit: "cover"}}
        />
      </div>

        </div>
      
      <div className="w-[37%] ">{name}</div>
      <div className="w-1/8">{price}</div>
      <div className="flex items-center mx-4 w-1/8">
        <IconButton onClick={handleDecrease} size="small">
          <FaMinus />
        </IconButton>
        <span className="px-2 text-sm">{quantity}</span>
        <IconButton onClick={handleIncrease} size="small">
          <FaPlus />
        </IconButton>
      </div>
      <div className="mx-4 w-1/8 text-sm">
        {(price * quantity).toLocaleString()}
      </div>
      <Button
        className="text-sm text-gray-600 w-1/8"
        startIcon={<FaTrashAlt />}
        onClick={handleRemove}
      >
      </Button>
    </div>
  );
};

export default CarritoCard;
