import { useDispatch, useSelector } from 'react-redux';
import { deleteMovie as deleteMovieAction,  } from '../features/library/librarySlice';

const ListMovies = () => {

    const libraryMovies = useSelector(state => state.library.movies);
    const dispatch = useDispatch();

    return (
        <ul className="list-group p-0">
        { libraryMovies.length > 0 ? 
            libraryMovies.map((m) => (
                <li 
                key={ m.id }
                className='list-group-item d-flex justify-content-between align-items-start align-items-md-center'>
                    <div>
                        <span className='d-block'>
                        { m.title ?
                            "Titre " + m.title :
                            "Titre inconnu" } 
                        </span>
                        <span className='d-block mt-2'>
                            { m.vote ?
                                "Note: " + m.vote + " / 10" :
                                "Note inconnue" }  
                        </span>
                    </div>
                    <button
                    className='btn btn-global btn-delete'
                    onClick={() => dispatch(deleteMovieAction(m.id))} >
                        <i className="fa-sharp fa-solid fa-delete-left"></i>
                    </button>   
                </li>
            )) :
            <li className='list-group-item d-flex justify-content-between align-items-center'>Aucune vidéo dans la médiathèque</li>
        }
        </ul>
    );
};

export default ListMovies;