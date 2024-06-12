"use client"
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Colores from "../reusables/Colores";
import Categorias from "../reusables/Categorias";
import Tallas from "../reusables/Tallas";

const FilterDrawer = () => {
  const [selectedColor, setSelectedColor] = useState<string>("");

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  useEffect(() => {
    console.log(`Color seleccionado (useEffect): ${selectedColor}`);
  }, [selectedColor]);

  return (
    <Box sx={{ width: 250 }}>
      <nav className="block sm:hidden  px-6 py-4">Filtros</nav>

      <Divider className="block sm:hidden "/>

      <nav>
      <Accordion defaultExpanded 
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
        
      }}>
          <AccordionSummary
            expandIcon={<IoIosArrowDown />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            Categorias
          </AccordionSummary>
          <AccordionDetails>
            <Categorias/>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded sx={{
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
            
          }}>
          <AccordionSummary
            expandIcon={<IoIosArrowDown />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            Colores
          </AccordionSummary>
          <AccordionDetails>
            <Colores onColorChange={handleColorChange}/>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded sx={{
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
          }}>
          <AccordionSummary
            expandIcon={<IoIosArrowDown />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            Tallas
          </AccordionSummary>
          <AccordionDetails>
            <Tallas/>
          </AccordionDetails>
        </Accordion>
      </nav>
    </Box>
  );
};

export default FilterDrawer;
