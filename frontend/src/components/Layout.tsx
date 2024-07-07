import { Box } from "@mui/material";
import React, { ReactNode } from "react";
import TopBar from "./TopBar";
import SideBar from "./SideBar";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const accessToken = localStorage.getItem("accessToken");
  return (
    <Box>
      <TopBar />
      <Box sx={{ display: "flex", bgcolor: "#FF8F00", height: "100vh" }}>
        {accessToken && <SideBar />}
        <Box sx={{ bgcolor: "#FF8F00", width: "100%", p: 5 }}>{children}</Box>
      </Box>
    </Box>
  );
};

export default Layout;
