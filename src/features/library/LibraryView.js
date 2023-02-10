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
                <h1 className="text-center pb-3">Médiathèque</h1>
                <div className="row p-2">
                    <h2>Film(s)</h2>                
                        <ListMovies />
                    <div className="d-flex p-0 mt-3">
                        <button className="btn-delete-all"
                        onClick={ () => dispatch(deleteAllmoviesAction()) }>
                            Supprimer tous les films
                        </button>  
                    </div>
                </div>

                <div className="row mt-2 p-2">
                    <h2>Livre(s)</h2>
                        <ListBooks />
                    <div className="d-flex p-0 mt-3">
                        <button className="btn-delete-all"
                        onClick={ () => dispatch(deleteAllBooksAction()) }> 
                            Supprimer tous les livres
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default LibraryView;