import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import Post from "../../models/postModel";

const JSON_PLACEHOLDER_API =
  "https://jsonplaceholder.typicode.com/posts?_limit=20";

//ACTION
export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (data, thunkApi) => {
    try {
      const response = await axios.get<Post[]>(JSON_PLACEHOLDER_API);
      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

interface PostState {
  loading: boolean;
  error: null | string;
  data: null | Post[];
}

const initialState = {
  loading: false,
  error: null,
  data: null,
} as PostState;

//SLICE
const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getPosts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getPosts.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default postSlice.reducer;