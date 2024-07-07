import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

const TopBar = () => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");
  return (
    <AppBar position="static">
      <Toolbar sx={{ bgcolor: "#26355D" }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Foodie-POS
        </Typography>
        {accessToken && <Button
          color="inherit"
          onClick={() => {
            localStorage.removeItem("accessToken");
            navigate("/login");
          }}
        >
          LOGOUT
        </Button>}
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
