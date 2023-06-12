import './css/Footer.scss';
import logo from '../assets/logo-footer.webp';

function Footer() {
    return (
        <footer className="flex column align-center">
            <img width={logo.width} height={logo.height} src={logo} alt="Logo de Kasa"/>
            <span className="font-normal">© 2020 Kasa. All rights reserved</span>
        </footer>
    );
}

export default Footer;