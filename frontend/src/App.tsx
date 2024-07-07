import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Box, Typography } from "@mui/material";
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <Typography>Main content Area</Typography>
    </Layout>
  );
}

export default App;
