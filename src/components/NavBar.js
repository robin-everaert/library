import { Link } from 'react-router-dom';
import { useState } from 'react';

const NavBar = () => {
    const [activeBtn, setActiveBtn] = useState("");

    return (
        <nav className="container-btn-nav btn-group mt-4">
            <Link 
                to="/movies" 
                className={`btn btn-nav ${activeBtn === "movies" ? "active" : ""}`} 
                onClick={() => setActiveBtn("movies")}
            >
                Movies
            </Link>
            
            <Link 
                to="/books" 
                className={`btn btn-nav ${activeBtn === "books" ? "active" : ""}`} 
                onClick={() => setActiveBtn("books")}
            >
                Books
            </Link>
            
            <Link 
                to='/lib' 
                className={`btn btn-nav ${activeBtn === "lib" ? "active" : ""}`} 
                onClick={() => setActiveBtn("lib")}
            >
                Library
            </Link>
        </nav>
    );
};

export default NavBar;
