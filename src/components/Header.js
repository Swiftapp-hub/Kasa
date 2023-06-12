import './css/Header.scss';
import logo from '../assets/logo.webp';
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <header className="flex align-center space-between">
            <img src={logo} alt="Logo de Kasa"/>

            <nav>
                <NavLink className="nav-link font-normal" to="/" activeClassName="active">Accueil</NavLink>
                <NavLink className="nav-link font-normal" to="/about" activeClassName="active">A Propos</NavLink>
            </nav>
        </header>
    );
}

export default Header;