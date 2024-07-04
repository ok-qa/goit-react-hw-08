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
  async (newUser, thunkAPI) => {
    try {
      // console.log(newUser);
      const response = await axios.post("/users/signup", newUser);
      setAuthHeader(response.data.token);
      toast.success(
        "Congratulations, your account has been successfully created."
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (userInfo, thunkAPI) => {
    try {
      console.log(userInfo);
      const response = await axios.post("/users/login", userInfo);
      setAuthHeader(response.data.token);
      toast.success("Welcome, you are successfully logged in.");
      return response.data;
    } catch (error) {
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
    setAuthHeader(state.auth.token);

    const result = await axios.get("/users/current");
    return result.data;
  },
  {
    condition(_, thunkAPI) {
      const state = thunkAPI.getState();
      return state.auth.token !== null;
    },
  }
);
