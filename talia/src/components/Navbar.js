import { NavLink, Link } from 'react-router-dom';


function Navbar(){

    return (<nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink  className="navbar-brand" to="/"><h2 className="main-text-color">Talija</h2></NavLink >
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink  className="nav-link" to="/">Pocetna</NavLink >
                </li>
                <li className="nav-item">
                    <NavLink  className="nav-link" to="/login">Ulogujte se</NavLink >
                </li>

            </ul>

        </div>
    </nav>);
}


export default Navbar;