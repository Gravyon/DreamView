import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "#282828", width:"100%", margin:0 }} >
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* Replace 'logo.png' with the path to your logo image */}
          <img src="logo.png" alt="Logo" />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', margin:"10px" }}>
          <Button color="inherit">Destacadas</Button>
          <Button color="inherit">Cartelera</Button>
          <Button color="inherit" style={{ backgroundColor: '#554F95'}}>
            Comprar Ticket
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
