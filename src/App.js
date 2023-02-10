import React, { useEffect }  from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch } from 'react-redux';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import FetchMoviesView from './features/fetchMovies/FetchMoviesView';
import FetchBooksView from './features/fetchBooks/FetchBooksView';
import LibraryView from './features/library/LibraryView';
import { getLocalStorageMovie as getLocalStorageMovieAction,
         getLocalStorageBook as getLocalStorageBookAction } from './features/library/librarySlice';


const App = () => {
    const dispatch = useDispatch();

  useEffect(() => {
    if(localStorage.getItem('movieData')) {
      dispatch(getLocalStorageMovieAction());
    }
    if(localStorage.getItem('bookData')) {
        dispatch(getLocalStorageBookAction());
    }
  }, []);

  return (
    <Router>
      <Header />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/library' element={ <Home /> } />
          <Route path="/movies" element={ <FetchMoviesView /> } />
          <Route path="books" element={ <FetchBooksView /> } />
          <Route path="/lib" element={ <LibraryView /> } />
        </Routes>
      <Footer />
    </Router>
  );
};

export default App;
