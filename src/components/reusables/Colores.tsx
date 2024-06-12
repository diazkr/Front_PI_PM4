import { IconButton } from "@mui/material";
import React from "react";
import { FaSquareFull } from "react-icons/fa";

interface ColoresProps {
    onColorChange: (color: string) => void;
  }

const Colores: React.FC<ColoresProps> = ({ onColorChange }) => {

const handleClick = (color: string) => {
    if (onColorChange) {
    onColorChange(color);
    }}
        
  return (
    <div>
      <IconButton aria-label="azul" size="small" onClick={() => handleClick("azul")}>
        <FaSquareFull className="text-sky-900" fontSize="inherit" />
      </IconButton>
      
      <IconButton aria-label="naranja" size="small" onClick={() => handleClick("naranja")}>
        <FaSquareFull className="text-amber-600" fontSize="inherit" />
      </IconButton>
      <IconButton aria-label="rojo" size="small">
        <FaSquareFull className="text-red-800" fontSize="inherit" />
      </IconButton>
      <IconButton aria-label="verde" size="small" onClick={() => handleClick("verde")}>
        <FaSquareFull className="text-emerald-800" fontSize="inherit" />
      </IconButton>
      <IconButton aria-label="morado" size="small" onClick={() => handleClick("morado")}>
        <FaSquareFull className="text-purple-800" fontSize="inherit" />
      </IconButton>
      <IconButton aria-label="rosado" size="small" onClick={() => handleClick("rosado")}>
        <FaSquareFull className="text-pink-700" fontSize="inherit" />
      </IconButton>
      <IconButton aria-label="negro" size="small" onClick={() => handleClick("negro")}> 
        <FaSquareFull className="text-black" fontSize="inherit" />
      </IconButton>
      <IconButton aria-label="blanco" size="small" onClick={() => handleClick("blanco")}>
        <FaSquareFull className="text-white" fontSize="inherit" />
      </IconButton>
    </div>
  );
}

export default Colores;
