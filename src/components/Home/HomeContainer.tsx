import { Button } from "@mui/material";
import Image from "next/image";
import { Container } from "postcss";
import React from "react";
import ContainerImageHome from "../reusables/ContainerImageHome";

const HomeContainer = () => {
  return (
    <div className="">
      <div className="relative middle-screen">
      <Image
        src="/hero.jpg"
        alt="Hero Image"
        className="object-cover w-full h-full"
        quality={100}
        fill
        style={{ objectPosition: "top" }}
      />
      <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
        <Image
          src="/logos/Logo.svg" 
          alt="Logo"
          width={250} 
          height={100} 
        />
      </div>
    </div>
      <div className="flex gap-4 flex-col md:flex-row fifty-sreen">
        <ContainerImageHome url="/mujerHome.jpg" text="mujer" link="/mujer"></ContainerImageHome>

        <ContainerImageHome url="/hombreHome.jpg" text="hombre" link="/hombre"></ContainerImageHome>

        <ContainerImageHome url="/salesHome.jpg" text="sales" link="/sales"></ContainerImageHome>

        </div>
    </div>
  );
};

export default HomeContainer;
