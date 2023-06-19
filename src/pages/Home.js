import './css/Home.scss';
import dBanner from '../assets/desktop-banner.webp';
import mBanner from '../assets/mobile-banner.webp';
import {useEffect, useState} from "react";
import GalleryCard from "../components/GalleryCard";

function Home() {
    const [jsonData, setJsonData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('http://localhost:3000/apidata/data.json');
                const data = await res.json();
                setJsonData(data);
            }
            catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="home">
            <div className="home-banner">
                <img width={dBanner.width} height={dBanner.height} src={dBanner} srcSet={`${mBanner} 991w, ${dBanner} 1920w`} alt="" />
                <h1 className="font-main-title flex justify-center align-center">Chez vous, partout et ailleurs</h1>
            </div>

            <section className="home-grid">
                {jsonData.map((item) => (
                    <GalleryCard key={item.id} item={item} />
                ))}
            </section>
        </div>
    );
}

export default Home;