import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {};

export const fetchSinglePersonAsync = createAsyncThunk("singlePerson", async (id) => {
	console.log("The id is the following:");
	console.log(id)
  try {
    const { data } = await axios.get(`http://localhost:8080/api/personnel/${id}`);
    return data;
  } catch (err) {
    console.log(err);
  }
});

// export const addPersonAsync = createAsyncThunk("addPerson", async (Person) => {
//     const { data } = await axios.post(`/api/Personnel`, Person);
//     return data
// });

const singlePersonSlice = createSlice({
  name: "singlePerson",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSinglePersonAsync.fulfilled, (state, action) => {
      return action.payload;
    });
    // builder.addCase(addPersonAsync.fulfilled, (state, action) => {
    //   state.push(action.payload);
    // });
  },
});

export const selectSinglePerson = (state) => {
  return state.singlePerson;
};

export default singlePersonSlice.reducer;
