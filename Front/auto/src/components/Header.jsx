import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const linkStyles = {
  textDecoration: "none",
  color: "#fff",
  cursor: "pointer",
};

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#3e4d61" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Link to="/">
              <img
                src="src/assets/bg-pattern-home-1.svg"
                alt="Logo"
                width="100px"
              />
            </Link>
          </Box>
          <Link to="/login" style={linkStyles}>
            <Typography variant="button" color="inherit" className="link">
              Login
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
