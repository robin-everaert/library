import { useState } from 'react';
import { useSelector, useDispatch, } from 'react-redux';
import CardMovies from '../../common/CardMovies';
import SpinnerLoading from '../../common/SpinnerLoading';
import { fetchMovies as fetchMoviesBooksAsyncAction } from './fetchMoviesSlice';

const FetchMoviesView = () => {
    const [titleMovie, setTitleMovie] = useState('');
    const dispatch = useDispatch();
    const moviesSliceData = useSelector(state => state.searchMovies);

    const handleChange = (e) => {
        setTitleMovie(e.target.value);
        dispatch(fetchMoviesBooksAsyncAction(titleMovie));
    };

    return (
        <main className='main main-view'>
            <div className="container">
                <h1 className='text-center pb-3'>Movies</h1>
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <div>
                            <input
                                type="text" 
                                value={ titleMovie }
                                className="input-search"
                                onChange={ handleChange }
                                placeholder="Search for a movie"
                            />
                        </div>
                    </div>
                </div>
        
                { moviesSliceData.isLoading ?
                <SpinnerLoading /> : 
                moviesSliceData.error !== '' ? 
                    <p className="w-100 text-center msg-error mt-5">No movies match your search</p> :
                    <div className="row container-view-movies mt-3">
                        <CardMovies moviesArray={ moviesSliceData.fetchedMovies } />    
                    </div> }
            </div>
        </main>
    );
};

export default FetchMoviesView;