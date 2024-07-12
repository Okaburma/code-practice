import { Alert, Snackbar } from "@mui/material";
import React from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { hideSnackbar } from "../store/slices/AppSnackbarSlice";

const AppSnackbar = () => {
  const { type, open, message } = useAppSelector((state) => state.snackbar);
  const dispatch = useAppDispatch();

  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      open={open}
    >
      <Alert
        onClose={() => dispatch(hideSnackbar())}
        severity={type}
        variant="filled"
        sx={{
          width: "100%",
          bgcolor: type === "error" ? "red" : "#FFB0B0",
          color: "#0C2D57",
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default AppSnackbar;
