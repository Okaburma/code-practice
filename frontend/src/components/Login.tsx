import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { NewUser } from "./Register";
import Layout from "./Layout";
import { useAppDispatch } from "../store/hooks";
import { loginUser } from "../store/slices/userSlice";

interface User extends NewUser {}

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [user, setUser] = useState<User>({ email: "", password: "" });

  return (
    <Layout>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Box sx={{ display: "flex", flexDirection: "column", maxWidth: 200 }}>
          <Typography variant="h2" sx={{ mb: 2, color: "#AF47D2" }}>
            Login
          </Typography>
          <TextField
            label={"email"}
            sx={{ mb: 2 }}
            autoComplete="off"
            onChange={(evt) => setUser({ ...user, email: evt.target.value })}
          />
          <TextField
            label={"password"}
            type="password"
            autoComplete="off"
            sx={{ mb: 3 }}
            onChange={(evt) => setUser({ ...user, password: evt.target.value })}
          />
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              sx={{
                width: "fit-content",
                bgcolor: "#AF47D2",
                color: "black",
                "&:hover": { bgcolor: "#FFDB00" },
              }}
              disabled={!user.email || !user.password}
              onClick={() =>
                dispatch(loginUser({ ...user, onSuccess: () => navigate("/") }))
              }
            >
              Login
            </Button>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Login;
