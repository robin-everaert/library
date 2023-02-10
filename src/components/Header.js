import NavBar from './NavBar';

const Header = () => {

    return (
        <div className="header-top">
            <div className="container-img">
                <img src="./react.png" alt="Le logo de react" />  
                <img src="./redux.svg" alt="Le logo de redux" />  
            </div>
            <h1>LIBRARY</h1>
            <h2>React - Redux Toolkit</h2>
            <NavBar />
        </div>         
    );
};

export default Header;