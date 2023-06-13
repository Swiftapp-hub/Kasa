import './css/GalleryCard.scss';
import {Link} from "react-router-dom";

function GalleryCard({item}) {
    return (
        <Link to={`/sheets/${item.id}`} className="gallery-card">
            <img src={item.cover} alt={item.title} />
            <h3 className="flex font-normal">{item.title}</h3>
        </Link>
    );
}

export default GalleryCard;