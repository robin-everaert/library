import { useState, useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {ChangeIconBtnOpenCard } from '../app/cardFunction';
import { addMovie as addMovieAction } from '../features/library/librarySlice';

const CardMovies = ({ moviesArray }) => {

  const [clickedIdMovies, setClickedIdMovies] = useState([]);
  const libraryMovies = useSelector(state => state.library.movies);
  let arrayIdMovies = [];

  const dispatch = useDispatch();

  const dateFormaterMovies = (date) => {
    let [yy, mm, dd] = date.split("-");
    return [dd, mm, yy].join("/");
  };
  const genreFinder = (m) => {
    let genreArray = [];
    for (let i = 0; i < m.genre_ids.length; i++) {
      switch (m.genre_ids[i]) {
        case 28:
          genreArray.push(`Action`);
          break;
        case 12:
          genreArray.push(`Aventure`);
          break;
        case 16:
          genreArray.push(`Animation`);
          break;
        case 35:
          genreArray.push(`Comédie`);
          break;
        case 80:
          genreArray.push(`Policier`);
          break;
        case 99:
          genreArray.push(`Documentaire`);
          break;
        case 18:
          genreArray.push(`Drame`);
          break;
        case 10751:
          genreArray.push(`Famille`);
          break;
        case 14:
          genreArray.push(`Fantasy`);
          break;
        case 36:
          genreArray.push(`Histoire`);
          break;
        case 27:
          genreArray.push(`Horreur`);
          break;
        case 10402:
          genreArray.push(`Musique`);
          break;
        case 9648:
          genreArray.push(`Mystère`);
          break;
        case 10749:
          genreArray.push(`Romance`);
          break;
        case 878:
          genreArray.push(`Science-fiction`);
          break;
        case 10770:
          genreArray.push(`Téléfilm`);
          break;
        case 53:
          genreArray.push(`Thriller`);
          break;
        case 10752:
          genreArray.push(`Guerre`);
          break;
        case 37:
          genreArray.push(`Western`);
          break;
        default:
          break;
      }
    }
    return genreArray.map((genre) =><div key={ genre } className="m-1">{ genre }</div>);
  };
  const handleSaveMovie = (id, title, vote) => {
    const movieToSave = { id, title, vote };
    dispatch(addMovieAction(movieToSave));
    setClickedIdMovies([...clickedIdMovies, id]);
  };
  const handleIsDisabledMovies = id => {
    return clickedIdMovies.includes(id)
  };

  useEffect(() => {
    libraryMovies.forEach((lb) => {
      arrayIdMovies.push(lb.id); 
    });
    setClickedIdMovies(arrayIdMovies)
  }, []);

  return moviesArray.map((movie) => (
    <div key={ movie.id } className="container-card-movies col-md-3">
      <div className="card-movies">
        
        <div className="card-header">
          <img 
          src={ movie.poster_path? 
            "https://image.tmdb.org/t/p/original/" + movie.poster_path : 
            "./img/poster.jpg" }
            alt={ "L'affiche du film: " + movie.title }
            className="img-movie img-thumbnail lazy" 
          />
          <h3 className='card-title'>
          { movie.title ?
            movie.title :
            "Titre inconnu" }
          </h3>
          <p>
          { movie.release_date ?
            "Date de sortie: " + dateFormaterMovies(movie.release_date) :
            "Date de sortie inconnue" }
          </p>
          { movie.vote_average ?
            <p>{ movie.vote_average } / 10<span> ⭐</span></p> :
            <p>Note inconnue</p> } 
        </div>

        <div id={ `k${movie.id}` } className="card-body collapse">
          <div className='container-movie-genre d-flex justify-content-center align-items-start flex-wrap'>
          { movie.genre_ids ? 
            genreFinder(movie) : 
            movie.genres.map((genre) => <div key={ genre }>{ genre.name }</div>) }
          </div>
          <p className='mt-2'>
          { movie.overview ?
            movie.overview :
            "Déscription inconnue" }
          </p>
          
          <div className="d-flex justify-content-center">
          { !handleIsDisabledMovies(movie.id) ?
            <button 
            className="btn-global btn-add mt-2"
            onClick={ () => handleSaveMovie(movie.id, movie.title, movie.vote_average) }
            >Ajouter à la médiathèque
            </button> :
            <span className="span-already-record">Film déja enregistré</span> }
          </div>
        </div>
        <button className="btn w-100 btn-open mt-4" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target={`#k${movie.id}`} 
        aria-expanded="false" 
        aria-controls={ movie.id }
        onClick={ () => ChangeIconBtnOpenCard(movie.id) }
        >
          <i className="fa-sharp fa-solid fa-chevron-down text-center w-100 chevron pt-1 pb-1" id={ `chevron${movie.id}` }></i>
        </button>
      </div> 
    </div>
  )); // End Return;
};

export default CardMovies;