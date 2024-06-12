// app/error.tsx
'use client';

import React from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Typography, Button, Container } from '@mui/material';

const ErrorPage: React.FC<{ error: Error, reset: () => void }> = ({ error, reset }) => {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container component="main" maxWidth="md" style={{ textAlign: 'center', marginTop: '8rem' }}>
      <Box>
        <Typography variant="h2" component="h2" gutterBottom>
          Algo salió mal
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Lo sentimos, ocurrió un error inesperado.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Por favor, inténtalo de nuevo más tarde.
        </Typography>
        <Button className='m-4' variant="contained" color="primary" onClick={() => router.push('/')}>
          Ir a la página principal
        </Button>
      </Box>
    </Container>
  );
};

export default ErrorPage;
