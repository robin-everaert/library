import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <nav className="containet-btn-nav btn-group mt-4 ">
            <Link to="/" className='d-none'>Home</Link>
            <Link to="/movies" className='btn btn-nav'>Films</Link>
            <Link to="/books" className='btn btn-nav'>Livres</Link>
            <Link to='/lib' className='btn btn-nav'>Médiathèque</Link>
        </nav>
    );
};

export default NavBar;