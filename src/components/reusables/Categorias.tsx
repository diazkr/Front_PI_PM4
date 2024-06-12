import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";

function Categorias() {
  return (
    <div>
      <FormGroup>
      <FormControlLabel control={<Checkbox/>} label="Faldas" color="#f87171" />
      <FormControlLabel control={<Checkbox/>} label="Buzos" color="#f87171" />
      <FormControlLabel control={<Checkbox/>} label="Joggers" color="#f87171" />
      </FormGroup>
    </div>
  );
}

export default Categorias;
