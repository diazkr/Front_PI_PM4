
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";

function Tallas() {
  return (
    <div>
      <FormGroup>
      <FormControlLabel control={<Checkbox/>} label="S" color="#f87171" />
      <FormControlLabel control={<Checkbox/>} label="M" color="#f87171" />
      <FormControlLabel control={<Checkbox/>} label="L" color="#f87171" />

      <FormControlLabel control={<Checkbox/>} label="XL" color="#f87171" />
      </FormGroup>
    </div>
  );
}

export default Tallas;
