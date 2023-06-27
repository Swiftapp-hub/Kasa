import './css/Banner.scss';

function Banner({text, dimage, mimage}) {
    return (
        <div className="home-banner">
            <img width={dimage.width} height={dimage.height} src={dimage} srcSet={`${mimage} 991w, ${dimage} 1920w`} alt=""/>
            <h1 className="font-main-title flex justify-center align-center">{text}</h1>
        </div>
    );
}

export default Banner;