import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";
import { useAppDispatch } from "../store/hooks";
import { registerUser } from "../store/slices/userSlice";

export interface NewUser {
  email: string;
  password: string;
}

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [newUser, setNewUser] = useState<NewUser>({ email: "", password: "" });

  return (
    <Layout>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Box sx={{ display: "flex", flexDirection: "column", maxWidth: 200 }}>
          <Typography variant="h3" sx={{ mb: 2 }}>
            Register
          </Typography>
          <TextField
            label={"Email"}
            sx={{
              mb: 2,
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#AF47D2", // Change this to your desired color
                },
              },
            }}
            autoComplete="off"
            onChange={(evt) =>
              setNewUser({ ...newUser, email: evt.target.value })
            }
          />
          <TextField
            label={"password"}
            type="password"
            sx={{
              mb: 3,
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#AF47D2", // Change this to your desired color
                },
              },
            }}
            autoComplete="off"
            onChange={(evt) =>
              setNewUser({ ...newUser, password: evt.target.value })
            }
          />
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              sx={{ width: "fit-content", bgcolor: "#26355D" }}
              onClick={() =>
                dispatch(
                  registerUser({
                    ...newUser,
                    onSuccess: () => navigate("/login"),
                  })
                )
              }
            >
              Register
            </Button>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Register;
