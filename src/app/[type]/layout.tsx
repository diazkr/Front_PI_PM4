"use client";
import { CarritoProvider } from "@/components/contextos/CarritoContext";
import FilterDrawer from "@/components/types/FilterDrawer";
import { Button, Divider, Drawer } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { FaSliders } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

const TypeLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-12">
      <Divider />
      <div className="p-2 gap-4 twenty-sreen flex flex-row overflow-x-auto whitespace-nowrap md:justify-center">
        <div className="bg-zinc-800 relative inline-block min-w-[150px] w-36 sm:w-1/4 md:w-1/6 h-full">
          <Image
            src="/categorias/basicas.jpg"
            alt="Hero Image"
            className="object-cover w-full h-full opacity-50"
            quality={100}
            width={500}
            height={500}
            style={{ objectPosition: "" }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-lg font-bold">Básicos</span>
          </div>
        </div>
        <div className="bg-zinc-600 relative inline-block min-w-[150px] w-36 sm:w-1/4 md:w-1/6 h-full">
          <Image
            src="/categorias/denim.jpg"
            alt="Hero Image"
            className="object-cover w-full h-full opacity-60"
            quality={100}
            width={500}
            height={500}
            style={{ objectPosition: "" }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-lg font-bold">Denim</span>
          </div>
        </div>
        <div className="bg-zinc-700 relative inline-block min-w-[150px] w-36 sm:w-1/4 md:w-1/6 h-full">
          <Image
            src="/categorias/camisetas.jpg"
            alt="Hero Image"
            className="object-cover w-full h-full opacity-60"
            quality={100}
            width={500}
            height={500}
            style={{ objectPosition: "" }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-lg font-bold">Camisetas</span>
          </div>
        </div>
        <div className="bg-zinc-700 relative inline-block min-w-[150px] w-36 sm:w-1/4 md:w-1/6 h-full">
          <Image
            src="/categorias/pantalones.jpeg"
            alt="Hero Image"
            className="object-cover w-full h-full opacity-60"
            quality={100}
            width={500}
            height={500}
            style={{ objectPosition: "" }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-lg font-bold">Pants</span>
          </div>
        </div>
      </div>
      <Divider />

      <div className="text-[#5C666F] flex flex-row justify-between px-6 md:hidden">
        <Button
          component="label"
          startIcon={<FaSliders className="text-[#5C666F]" />}
          className="px-12"
          onClick={() => setOpen(true)}
        >
          Filtros
        </Button>

        <Button
          component="label"
          endIcon={<IoIosArrowDown className="text-[#5C666F]" />}
          className="px-12"
        >
          Ordenar
        </Button>
      </div>

      <Divider />

      <Drawer open={open} anchor="right" onClose={() => setOpen(false)}>
        <FilterDrawer />
      </Drawer>

      <div className="flex flex-col lg:flex-row">
        <div className="px-6 w-1/5 hidden lg:block">
          <FilterDrawer />
        </div>

        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default TypeLayout;
