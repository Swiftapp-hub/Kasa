import './css/Home.scss';
import {useEffect, useState} from "react";
import GalleryCard from "../components/GalleryCard";
import Banner from "../components/Banner";
import dBanner from "../assets/desktop-banner.webp";
import mBanner from "../assets/mobile-banner.webp";

function Home() {
    const [jsonData, setJsonData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('http://localhost:3000/apidata/data.json');
                const data = await res.json();
                setJsonData(data);
            } catch (err) {
                console.log(err);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="home">
            <Banner text="Chez vous, partout et ailleurs" dimage={dBanner} mimage={mBanner}/>

            <section className="home-grid">
                {jsonData.map((item) => (
                    <GalleryCard key={item.id} item={item}/>
                ))}
            </section>
        </div>
    );
}

export default Home;