import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  rockets: [],
  loading: false,
  error: '',
};

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get('https://api.spacexdata.com/v4/rockets');
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRockets: (state, action) => {
      const { id } = action.payload;
      const rocket = state.rockets.find((rocket) => rocket.id === id);
      rocket.reserved = !rocket.reserved;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.loading = false;
        const data = action.payload.map((item) => {
          const {
            name, description, id, flickr_images: img,
          } = item;
          return {
            name, description, id, img,
          };
        });
        state.rockets = data;
        state.error = '';
      })
      .addCase(fetchRockets.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { reserveRockets } = rocketsSlice.actions;
export default rocketsSlice.reducer;
