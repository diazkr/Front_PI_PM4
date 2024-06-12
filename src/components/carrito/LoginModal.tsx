"use client"
import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import Link from "next/link";

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ open, onClose }) => {
    const handleClose = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation(); 
        onClose();
      };
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Inicia sesión
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }} className="my-4">
          Necesitas iniciar sesión para agregar productos al carrito.
        </Typography>
        <Box sx={{ mt: 3, display: "flex", justifyContent: "space-between" }}>
          
          <Button variant="outlined" onClick={handleClose}>
            Cancelar
          </Button>
          <Link href="/login" passHref>
            <Button variant="contained" color="primary">
              Iniciar sesión
            </Button>
          </Link>
        </Box>
      </Box>
    </Modal>
  );
};

export default LoginModal;
