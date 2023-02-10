import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SpinnerLoading from '../../common/SpinnerLoading';
import CardBooks from '../../common/CardBooks';
import { fetchBooks as fetchBooksAsyncAction } from './fetchBooksSlice';

const FetchBooksView = () => {
    const [titleBook, setTitleBook] = useState('');
    const dispatch = useDispatch();
    const booksSliceData = useSelector(state => state.searchBooks);

    const handleChange = (e) => {
        setTitleBook(e.target.value);
        dispatch(fetchBooksAsyncAction(titleBook));
    };
    
    return (
        <main className="main main-view">
            <div className="container">
                <h1 className='text-center pb-3'>Livres</h1>
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <div>
                            <input
                                type="text" 
                                value={ titleBook }
                                className="input-search"
                                onChange={ handleChange }
                                placeholder="Rechercher un livre"
                            />
                        </div>
                    </div>
                </div>

                { booksSliceData.isLoading ?
                    <SpinnerLoading /> : 
                    booksSliceData.error !== '' ? 
                        <p className="w-100 text-center msg-error mt-5">Aucun livre ne correspond à votre recherche</p> :
                        <div className="row container-view-books mt-3 p-2 p-md-0">
                            <CardBooks booksArray={ booksSliceData.fetchedBooks } />    
                        </div> }
            </div>
        </main> 
    );
};

export default FetchBooksView;