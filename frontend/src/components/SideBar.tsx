import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SettingsIcon from "@mui/icons-material/Settings";
import React from "react";
import { Link } from "react-router-dom";

const sidebarItems = [
  { id: 1, name: "Menu", to: "/menu", icon: <LocalDiningIcon /> },
  {
    id: 2,
    name: "Menu Category",
    to: "/menu-category",
    icon: <MenuBookIcon />,
  },
];

const SideBar = () => {
  return (
    <Box sx={{ width: 250, bgcolor: "#AF47D2", height: "100vh" }}>
      <List>
        {sidebarItems.map((item) => (
          <Link key={item.id} to={item.to} style={{ textDecoration: "none" }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: "#FFDB00" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.name} sx={{ color: "#FFDB00" }} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <Link to={"/settings"} style={{ textDecoration: "none" }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "#FFDB00" }}>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary={"Settings"} sx={{ color: "#FFDB00" }} />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Box>
  );
};

export default SideBar;
