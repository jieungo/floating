import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const distanceSlice = createSlice({
  name: 'distance',
  initialState,
  reducers: {
    setDistance(state, action) {
      state.value = action.payload;
    },
  },
});

export const {setDistance} = distanceSlice.actions;

export default distanceSlice.reducer;
