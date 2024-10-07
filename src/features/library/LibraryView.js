import { useDispatch } from 'react-redux';
import ListBooks from '../../common/ListBooks';
import ListMovies  from '../../common/ListMovies';
import { deleteAllmovies as deleteAllmoviesAction,
         deleteAllBooks as deleteAllBooksAction, } from './librarySlice';

const LibraryView = () => {

    const dispatch = useDispatch();

    return (
        <main className="main">
            <div className="container container-library-list">
                <h1 className="text-center pb-3">Library</h1>
                <div className="row p-2">
                    <h2>Movie(s)</h2>
                        <ListMovies />
                    <div className="d-flex p-0 mt-3">
                        <button className="btn-delete-all"
                        onClick={ () => dispatch(deleteAllmoviesAction()) }>
                             Delete all movies
                        </button>  
                    </div>
                </div>

                <div className="row mt-2 p-2">
                    <h2>Book(s)</h2>
                        <ListBooks />
                    <div className="d-flex p-0 mt-3">
                        <button className="btn-delete-all"
                        onClick={ () => dispatch(deleteAllBooksAction()) }> 
                             Delete all books
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default LibraryView;