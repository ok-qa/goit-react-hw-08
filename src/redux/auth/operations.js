import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

axios.defaults.baseURL = "https://connections-api.goit.global/";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (userCredentials, thunkAPI) => {
    try {
      // console.log(newUser);
      const response = await axios.post("/users/signup", userCredentials);
      setAuthHeader(response.data.token);
      toast.success(
        "Congratulations, your account has been successfully created."
      );
      return response.data;
    } catch (error) {
      toast.error("Oooops... Something went wrong. Please try again.");
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (userCredentials, thunkAPI) => {
    try {
      console.log(userCredentials);
      const response = await axios.post("/users/login", userCredentials);
      setAuthHeader(response.data.token);
      toast.success("Welcome, you are successfully logged in.");
      return response.data;
    } catch (error) {
      toast.error("Login error. Please try again.");
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    const response = await axios.post("/users/logout");
    clearAuthHeader();
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue(
        "The email and password you entered did not match our records. Please double-check and try again."
      );
    }
    try {
      setAuthHeader(persistedToken);
      const response = await axios.get("users/current");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
    //   setAuthHeader(state.auth.token);

    //   const result = await axios.get("/users/current");
    //   return result.data;
    // },
    // {
    //   condition(_, thunkAPI) {
    //     const state = thunkAPI.getState();
    //     return state.auth.token !== null;
    //   },
  }
);
