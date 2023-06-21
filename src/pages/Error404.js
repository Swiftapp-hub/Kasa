import './css/Error404.scss';
import {Link} from "react-router-dom";

function Error404() {
    return (
        <div className="error404 flex column align-center">
            <h1>404</h1>
            <h2 className="font-title">Oups! La page que vous demandez n'existe pas.</h2>
            <Link className="font-normal" to="/">Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Error404