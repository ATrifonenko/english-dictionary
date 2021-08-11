import { createSlice } from '@reduxjs/toolkit';

export const wordlistSlice = createSlice({
  name: 'wordlist',
  initialState: [],
  reducers: {
    getWords: (state, action) => [...state, ...action.payload],
  },
});
//export const selectWordlist = (state) => state.wordlist;
export const { getWords } = wordlistSlice.actions;
export default wordlistSlice.reducer;
