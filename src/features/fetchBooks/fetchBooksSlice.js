import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading: false,
    fetchedBooks: [],
    error: '',
};

export const fetchBooks = createAsyncThunk(
    'books/fetchBooks',
    async arg => {
       const { data } = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${arg}&maxResults=20&langRestrict=en`)
       return data.items
    }
);

const fetchBooksSlice = createSlice({
    name:'books',
    initialState,
    reducers: {},

    extraReducers: builder => {
        builder.addCase(fetchBooks.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(fetchBooks.fulfilled, (state, action) => {
            state.isLoading = false;
            state.fetchedBooks = action.payload;
            state.error = '';
        });
        builder.addCase(fetchBooks.rejected, (state, action) => {
            state.isLoading = false;
            state.fetchedBooks = [];
            state.error = action.error.message;
        });
    }
});

export default fetchBooksSlice.reducer;