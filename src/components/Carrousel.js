import "./css/Carrousel.scss";
import {useEffect, useState} from "react";
import arrow from "../assets/arrow.png";

function showOrHide(index, imgVisible) {
    if (index === imgVisible) {
        return "slide visible";
    } else if (index < imgVisible) {
        return "slide passed";
    } else {
        return "slide";
    }
}

function Carrousel({itemImages}) {
    const [imgVisible, setImgVisible] = useState(0);
    const itemImagesLength = itemImages ? itemImages.length : 0;

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.keyCode === 37) imgVisible === 0 ? setImgVisible(itemImagesLength - 1) : setImgVisible(imgVisible - 1);
            else if (event.keyCode === 39) imgVisible + 1 === itemImagesLength ? setImgVisible(0) : setImgVisible(imgVisible + 1);
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [imgVisible, itemImagesLength]);

    return (
        <section className="carrousel flex row">
            {itemImages.map((item, index) => (
                <img className={showOrHide(index, imgVisible)} key={item} src={item} alt=""/>
            ))}

            {itemImagesLength > 1 && (<>
                <button onClick={() => imgVisible === 0 ? setImgVisible(itemImagesLength - 1) : setImgVisible(imgVisible - 1)}>
                    <img src={arrow} alt="Previous"/>
                </button>

                <button className="second"
                        onClick={() => imgVisible + 1 === itemImagesLength ? setImgVisible(0) : setImgVisible(imgVisible + 1)}>
                    <img src={arrow} alt="Next"/>
                </button>

                <span className="count font-normal">
                    {imgVisible + 1} / {itemImagesLength}
                </span>
            </>)}
        </section>
    );
}

export default Carrousel;