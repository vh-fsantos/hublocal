import { Box, Typography } from '@mui/material';
import React from 'react';

const Presentation = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', bgcolor: 'primary.main', paddingBlockStart: '4.75rem'}} >
      <img src='image1.png'  alt='Pessoa contente com o serviço da Hub Local' style={{ maxWidth: '640px', alignSelf: 'center' }}/>
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, bgcolor: 'secondary.main', alignItems: 'center', paddingInline: '4.125rem', paddingBlockStart: '21px', gap: '10px' }}>
          <Typography variant='h1' component='h1' color='text.secondary'>Junte-se a vários<br/>clientes satisfeitos.</Typography>
          <Typography variant='body1' component='p' color='text.secondary'>Cliente HubLocal ganha mais relevância, autoridade e<br/>visibilidade. Mais de 7.000 marcas confiam na nossa<br/>plataforma. Seja uma delas!</Typography>
      </Box>
    </Box>
  );
};

export default Presentation;