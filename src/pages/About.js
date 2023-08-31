import './css/About.scss';
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import {useEffect, useState} from "react";
import dAboutBanner from "../assets/desktop-about-banner.webp";
import mAboutBanner from "../assets/mobile-about-banner.webp";

function About() {
    const [jsonData, setJsonData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('/apidata/aboutdata.json');
                const data = await res.json();

                setJsonData(data);
            } catch (err) {
                console.log(err);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="about flex column">
            <Banner text="" dimage={dAboutBanner} mimage={mAboutBanner}/>

            {jsonData.map((item, index) => (
                <Collapse key={index} title={item.name} description={item.content} isExpand={false}/>
            ))}
        </div>
    );
}

export default About;