import { LoginUserParam, RegisterUserParam, User, UserSlice } from "./../../types/user";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// interface User {
//   name: string;
//   email: string;
// }

// interface UserSlice {
//   user: User | null;
//   isLoading: boolean;
//   error: Error | null;
// }

const initialState: UserSlice = {
  user: null,
  isLoading: false,
  error: null,
};

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (registerUserParam: RegisterUserParam, thunkAPI) => {
    const {email,password} = registerUserParam;
    const response = await fetch("http://localhost:5000/register", {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify({email,password}),
    });
    registerUserParam.onSuccess && registerUserParam.onSuccess();
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (loginUserParam: LoginUserParam, thunkAPI) => {
    const response = await fetch("http://localhost:5000/login", {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify(loginUserParam),
    });
    const dataFromServer = await response.json();
    const { accessToken } = dataFromServer;
    localStorage.setItem("accessToken", accessToken);
    loginUserParam.onSuccess && loginUserParam.onSuccess();
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const {setUser} = userSlice.actions;
export default userSlice.reducer;
