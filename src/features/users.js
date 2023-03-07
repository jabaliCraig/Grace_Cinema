import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchUsersAsync = createAsyncThunk("users", async () => {
  try {
    const { data } = await axios.get(`http://localhost:8080/api/users`);
    return data;
  } catch (err) {
    console.log(err);
  }
});

export const addUserAsync = createAsyncThunk("addUser", async (user) => {
    const { data } = await axios.post(`/api/users`, user);
    return data
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsersAsync.fulfilled, (state, action) => {
      // Add user to the state array
      return action.payload;
    });
    builder.addCase(addUserAsync.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

export const selectUsers = (state) => {
  return state.users;
};

export default usersSlice.reducer;
