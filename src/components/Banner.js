import './css/Banner.scss';
import dBanner from "../assets/desktop-banner.webp";
import mBanner from "../assets/mobile-banner.webp";
import dAboutBanner from "../assets/desktop-about-banner.webp";
import mAboutBanner from "../assets/mobile-about-banner.webp";

function Banner({text}) {
    return (
        <div className="home-banner">
            {text === "" ? (
                <img width={dAboutBanner.width} height={dAboutBanner.height} src={dAboutBanner} srcSet={`${mAboutBanner} 991w, ${dAboutBanner} 1920w`}
                     alt=""/>
            ) : (
                <img width={dBanner.width} height={dBanner.height} src={dBanner} srcSet={`${mBanner} 991w, ${dBanner} 1920w`} alt=""/>
            )}
            <h1 className="font-main-title flex justify-center align-center">{text}</h1>
        </div>
    );
}

export default Banner;