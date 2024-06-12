// CarritoContext.js
"use client"
import React, { useContext, useState, ReactNode, useEffect, createContext } from 'react';
import { ProductInterface } from "@/interfaces/ProductoInterface";

interface CarritoContextType {
  carrito: ProductInterface[];
  addToCarrito: (product: ProductInterface) => void;
  removeFromCarrito: (productId: string) => void;
  clearCarrito: () => void; // Añadir esta línea
}

const CarritoContext = createContext<CarritoContextType | undefined>(undefined);

export const CarritoProvider = ({ children }: { children: ReactNode }) => {
  const [carrito, setCarrito] = useState<ProductInterface[]>(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("carrito");
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("carrito", JSON.stringify(carrito));
    }
  }, [carrito]);

  const addToCarrito = (product: ProductInterface) => {
    setCarrito((prevCarrito) => [...prevCarrito, product]);
  };

  const removeFromCarrito = (productId: string) => {
    setCarrito((prevCarrito) =>
      prevCarrito.filter((product) => product.id !== productId)
    );
  };

  const clearCarrito = () => {
    setCarrito([]); // Limpiar el carrito
  };

  return (
    <CarritoContext.Provider value={{ carrito, addToCarrito, removeFromCarrito, clearCarrito}}>
      {children}
    </CarritoContext.Provider>
  );
};

export const useCarrito = (): CarritoContextType => {
    const context = useContext(CarritoContext);
    console.log('useCarrito context:', context); // Depuración
    if (!context) {
      throw new Error("useCarrito must be used within a CarritoProvider");
    }
    return context;
  };