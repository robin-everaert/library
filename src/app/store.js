import { configureStore } from '@reduxjs/toolkit';
import fetchMoviesSliceReducer from '../features/fetchMovies/fetchMoviesSlice';
import fetchBooksSliceReducer from '../features/fetchBooks/fetchBooksSlice';
import libraryReducer from '../features/library/librarySlice';

export const store = configureStore({
  reducer: {
    searchMovies: fetchMoviesSliceReducer,
    searchBooks: fetchBooksSliceReducer,
    library: libraryReducer,  
  },
});
