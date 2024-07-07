import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React from "react";
import { NewMenuParams } from "../types/menu";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { createMenu } from "../store/slices/menuSlice";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  newMenu: NewMenuParams;
  setNewMenu: React.Dispatch<React.SetStateAction<NewMenuParams>>;
}

const NewMenuDialog = ({ open, setOpen, newMenu, setNewMenu }: Props) => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.menu);

  const handleCreateMenu = () => {
    const isValid = newMenu.name;
    if (!isValid) return;
    dispatch(createMenu(newMenu));
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>New Menu</DialogTitle>
      <DialogContent sx={{ width: 300 }}>
        <Box>
          <TextField
            sx={{ width: "100%", mb: 2 }}
            label={"name"}
            onChange={(e) => setNewMenu({ ...newMenu, name: e.target.value })}
          />
          <TextField
            type="price"
            sx={{ width: "100%" }}
            label={"price"}
            onChange={(e) =>
              setNewMenu({ ...newMenu, price: Number(e.target.value) })
            }
          />
        </Box>
      </DialogContent>
      <DialogActions sx={{ p: 2 }}>
        <Button variant="outlined" onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#26355D",
            "&:hover": { bgcolor: "#405589" },
            width: 100,
            height: 35,
          }}
          onClick={handleCreateMenu}
        >
          {isLoading ? (
            <CircularProgress size={20} sx={{ color: "#efefef" }} />
          ) : (
            "Create"
          )}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewMenuDialog;
