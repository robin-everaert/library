import { useDispatch, useSelector } from 'react-redux';
import { deleteBook as deleteBookAction } from '../features/library/librarySlice';

const ListBooks = () => {

    const libraryBooks = useSelector(state => state.library.books);
    const dispatch = useDispatch();

    return (
        <ul className='list-group p-0'>
        { libraryBooks.length > 0 ? 
            libraryBooks.map((l) => (
                <li 
                key={ l.id }
                className='list-group-item d-flex justify-content-between align-items-start align-items-md-center'
                >
                    <div>
                        <span className='d-block'>
                        { l.title ? l.title : "Unknown title" }
                        </span> 
                        <span className='d-block mt-2'>
                        {l.author ? (
                            <span>
                                <span className="titled">By:</span> {l.author}
                            </span>
                        ) : (
                            "Unknown author"
                        )}
                        </span>
                    </div>
                    <button
                    className='btn btn-global btn-delete'
                    onClick={() => dispatch(deleteBookAction(l.id))}>
                        <i className="fa-sharp fa-solid fa-delete-left"></i>
                    </button>   
                </li>
            )) :
            <li className='list-group-item d-flex justify-content-between align-items-center'>No books in the library</li>
        }   
        </ul>
    );
};

export default ListBooks;