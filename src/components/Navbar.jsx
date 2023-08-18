import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      style={{ backgroundColor: "#282828", width: "100%", margin: 0 }}
    >
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src="logo.png" alt="Logo" />
        </div>
        <div
          style={{ display: "flex", alignItems: "center", margin: "0 10px" }}
        >
          <Button sx={{ margin: "0 10px" }} color="inherit">
            Destacadas
          </Button>
          <Link to={"/"}>
            <Button sx={{ margin: "0 10px" }} color="inherit">
              Cartelera
            </Button>
          </Link>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#554F95",
              margin: "0 10px",
            }}
            // color="inherit"
          >
            Comprar Ticket
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
