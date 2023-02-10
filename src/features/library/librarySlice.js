import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    books: [],
};

const updateLocalStorageMovie = newMoviesArray => {
    localStorage.setItem('movieData', JSON.stringify(newMoviesArray));
};
const updateLocalStorageBook = newBooksArray => {
    localStorage.setItem('bookData', JSON.stringify(newBooksArray));
};

const librarySlice = createSlice({
    name: "library",
    initialState,
    reducers: {
        /* Movies */
        getLocalStorageMovie: state => {
            state.movies = JSON.parse(localStorage.getItem('movieData'));
        },
        addMovie: (state, action) => {
            const newMovie = { id: action.payload.id, title: action.payload.title, vote: action.payload.vote }
            state.movies.push(newMovie);
            updateLocalStorageMovie(state.movies);
        },
        deleteMovie: (state, action) => {
            state.movies = state.movies.filter(movie => movie.id !== action.payload);
            updateLocalStorageMovie(state.movies);
        },
        deleteAllmovies: state => {
            state.movies = [];
            updateLocalStorageMovie(state.movies);
        },
        /* Books */
        getLocalStorageBook: state => {
            state.books = JSON.parse(localStorage.getItem('bookData'));
        },
        addBook: (state, action) => {
            const newBook = { id: action.payload.id, title: action.payload.title, author: action.payload.author }
            state.books.push(newBook);
            updateLocalStorageBook(state.books);
        },
        deleteBook: (state, action) => {
            state.books = state.books.filter(book => book.id !== action.payload);
            updateLocalStorageBook(state.books);
        },
        deleteAllBooks: state => {
            state.books = [];
            updateLocalStorageBook(state.books);
        },
    }
});

export default librarySlice.reducer;
export const { getLocalStorageMovie, addMovie, deleteMovie, deleteAllmovies,
               getLocalStorageBook, addBook, deleteBook, deleteAllBooks } = librarySlice.actions;
