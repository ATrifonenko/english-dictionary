import { configureStore } from '@reduxjs/toolkit';
import wordlistReduser from './components/Wordlist/wordlistSlice';

export default configureStore({
  reducer: {
    wordlist: wordlistReduser,
  },
});
