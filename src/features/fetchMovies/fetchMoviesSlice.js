import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading: false,
    fetchedMovies: [],
    error: '',
};

export const fetchMovies = createAsyncThunk(
    'movies/fetchMovies',
    async arg => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=${arg}&language=fr-FR`)
        return data.results;
    }
);

const fetchMoviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},

    extraReducers: builder => {
        builder.addCase(fetchMovies.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.isLoading = false;
            state.fetchedMovies = action.payload;
            state.error = '';
        });
        builder.addCase(fetchMovies.rejected, (state, action) => {
            state.isLoading = false;
            state.fetchedMovies = [];
            state.error = action.error.message;
        });
    }
});

export default fetchMoviesSlice.reducer;