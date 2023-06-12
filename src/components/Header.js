import './css/Header.scss';
import logo from '../assets/logo.webp';
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <header className="flex align-center space-between">
            <img width={logo.width} height={logo.height} src={logo} alt="Logo de Kasa"/>

            <nav>
                <NavLink className="nav-link font-normal" to="/">Accueil</NavLink>
                <NavLink className="nav-link font-normal" to="/about">A Propos</NavLink>
            </nav>
        </header>
    );
}

export default Header;