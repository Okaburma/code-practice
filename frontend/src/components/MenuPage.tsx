import React, { useState } from "react";
import Layout from "./Layout";
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import { NewMenuParams } from "../types/menu";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { createMenu } from "../store/slices/menuSlice";
import NewMenuDialog from "./NewMenuDialog";

const MenuPage = () => {
  const [open, setOpen] = useState(false);
  const [newMenu, setNewMenu] = useState<NewMenuParams>({ name: "", price: 0 });

  return (
    <Layout>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Box>
          <Button
            variant="contained"
            sx={{ bgcolor: "#26355D", "&:hover": { bgcolor: "#405589" } }}
            onClick={() => setOpen(true)}
          >
            New Menu
          </Button>
        </Box>
        <NewMenuDialog
          open={open}
          setOpen={setOpen}
          newMenu={newMenu}
          setNewMenu={setNewMenu}
        />
      </Box>
    </Layout>
  );
};

export default MenuPage;
