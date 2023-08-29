import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  missions: [],
  loading: false,
  error: '',
};

const missionsSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {},
});

export default missionsSlice.reducer;
