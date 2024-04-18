import { configureStore, createSlice } from "@reduxjs/toolkit";

const signInPage = { isOpen: false };

const activeCategorySlice = createSlice({
  name: "Signin Page open",
  initialState: signInPage,
  reducers: {
    changeState(state, action) {
      state.isOpen = action.payload;
    },
  },
});

export const singInAction = activeCategorySlice.actions;

const store = configureStore({
  reducer: activeCategorySlice.reducer,
});

export default store;
