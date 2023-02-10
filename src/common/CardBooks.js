import { useState, useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeIconBtnOpenCard } from '../app/cardFunction';
import { addBook as addBookAction } from '../features/library/librarySlice';

const CardBooks = ({ booksArray }) => {

  const [clickedIdBooks, setClickedIdBooks] = useState([]);
  let arrayIdBooks = [];

  const libraryBooks = useSelector(state => state.library.books);
  const dispatch = useDispatch();

  const dateFormaterBooks = (date) => {
    let [yy, mm, dd] = date.split("-");
    return yy;
  };
  const handleSaveBook = (id, title, author) => {
    const bookToSave = { id, title, author };
    dispatch(addBookAction(bookToSave));
    setClickedIdBooks([...clickedIdBooks, id]);
  };
  const handleIsDisabledBooks = id => {
    return clickedIdBooks.includes(id)
  };

  useEffect(() => { 
    libraryBooks.forEach((lb) => {
      arrayIdBooks.push(lb.id); 
    });
    setClickedIdBooks(arrayIdBooks)
  }, []);

  return booksArray.map((book) => (
        <div key={ book.id } className="card-books col-12 mt-2 mb-2">
          <div className="card-books-header d-flex justify-content-between"
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target={`#k${book.id}`} 
          aria-expanded="false" 
          aria-controls={ book.id }
          onClick={ () => ChangeIconBtnOpenCard(book.volumeInfo.id) }  
          >
          <div className="container-book-title">
            <h3 className='card-books-title'>{ book.volumeInfo.title }</h3>
            { book.volumeInfo.subtitle &&
              <h3 className='card-books-title'>{ book.volumeInfo.subtitle }</h3> }
            <h4 className="card-books-author mb-2">
            { book.volumeInfo.authors ?
              "Par: " + book.volumeInfo.authors :
              "Auteur inconnu" }
            </h4>
            <p>
            { book.volumeInfo.publishedDate ?
              "Année de publication: " + dateFormaterBooks(book.volumeInfo.publishedDate) :
              "Année de publication inconnue" }
            </p>           
          </div>
          <i className="fa-sharp fa-solid fa-chevron-down text-center chevron pt-1 pb-1" id={ `chevron${book.volumeInfo.id}` }></i>
        </div>

        <div id={ `k${book.id}` } className="card-books-body collapse"> 
          <img 
          src={ book.volumeInfo.hasOwnProperty('imageLinks') ?
            book.volumeInfo.imageLinks.thumbnail :
            "./img/no-cover-book.jpg" } 
          alt={ "L'affiche de " + book.volumeInfo.title }
          className="img-book img-thumbnail lazy" 
          /> 
          <p className="mt-3">
          { book.volumeInfo.description ?
            book.volumeInfo.description :
            "Aucune description" }
          </p>
          { book.volumeInfo.previewLink ? 
            <button 
            className="btn-global"
            >
            <a href={book.volumeInfo.previewLink} target="_blank">Voir plus</a>
            </button> :
            <span className="btn-global">Lien inconnu</span> }
          <div className="d-flex justify-content-start mt-3">
          { !handleIsDisabledBooks(book.id) ?
            <button 
            className="btn-global btn-add"
            onClick={ () => handleSaveBook(book.id, book.volumeInfo.title, book.volumeInfo.authors) }
            >Ajouter à la médiathèque
            </button> :
            <span className="span-already-record">Livre déja enregistré</span> }
          </div>     
        </div>
    </div>
  )); // close return;
};

export default CardBooks;