import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <nav className="containet-btn-nav btn-group mt-4 ">
            <Link to="/movies" className='btn btn-nav'>Films</Link>
            <Link to="/books" className='btn btn-nav'>Livres</Link>
            <Link to='/library' className='btn btn-nav'>Médiathèque</Link>
        </nav>
    );
};

export default NavBar;