import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUser {
  id: string;
  name: string;
  lastname: string;
  email: string;
  phoneNumber: string;
  countryCode: string;
}

type AuthSliceState = {
  isAuth: boolean;
  user?: IUser;
  error: string | undefined;
  isLoading: boolean;
  // role: []
}

const initialState: AuthSliceState = {
  isAuth: false,
  user: undefined,
  error: undefined,
  isLoading: false,
  // role: []
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    setUser: (state, action: PayloadAction<IUser | undefined>) => {
      state.user = action.payload;
    },
    setError: (state, action: PayloadAction<string | undefined>) => {
      state.error = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    logout: (state) => {
      state.isAuth = false;
      state.user = undefined;
      state.error = undefined;
      state.isLoading = false;
    },
    clean: (state) => {
      state.error = undefined;
      state.isAuth = false;
      state.user = undefined;
    },
  }
})

export const authActions = authSlice.actions;

export const AuthReducer = authSlice.reducer;

