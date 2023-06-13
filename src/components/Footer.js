import './css/Footer.scss';
import logo from '../assets/logo-footer.webp';

function Footer() {
    return (
        <footer className="flex column align-center">
            <img width="880" height="290" src={logo} alt="Logo de Kasa"/>
            <span className="font-normal">© 2020 Kasa. All rights reserved</span>
        </footer>
    );
}

export default Footer;