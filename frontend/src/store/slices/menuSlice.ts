import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Menu, MenuSlice, NewMenuParams } from "../../types/menu";

const initialState: MenuSlice = {
  menus: [],
  isLoading: false,
  error: null,
};

export const createMenu = createAsyncThunk(
  "menu/createMenu",
  async (newMenuParam: NewMenuParams) => {
    const { onSuccess, ...payload } = newMenuParam;
    const response = await fetch("http://localhost:5000/menu", {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify(payload),
    });
    const dataFromServer = await response.json();
    const { menus } = dataFromServer;
    onSuccess && onSuccess();
    return menus;
  }
);

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setMenus: (state, action: PayloadAction<Menu[]>) => {
      state.menus = action.payload;
    },
    addMenus: (state, action: PayloadAction<Menu>) => {
      state.menus = [...state.menus, action.payload];
    },
    removeMenus: (state, action: PayloadAction<Menu>) => {
      state.menus = state.menus.filter((menu) =>
        menu.id === action.payload.id ? false : true
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createMenu.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createMenu.fulfilled, (state, action) => {
        state.menus = action.payload;
        state.isLoading = false;
      })
      .addCase(createMenu.rejected, (state) => {
        state.isLoading = false;

        state.error = new Error("Error occurred at creating New Menu");
      });
  },
});

export const { addMenus, removeMenus } = menuSlice.actions;
export default menuSlice.reducer;
