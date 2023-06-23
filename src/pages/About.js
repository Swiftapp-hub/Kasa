import './css/About.scss';
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import {useEffect, useState} from "react";

function About() {
    const [jsonData, setJsonData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('http://localhost:3000/apidata/aboutdata.json');
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
            <Banner text=""/>

            {jsonData.map((item, index) => (
                <Collapse key={index} title={item.name} description={item.content} isExpend={index === 0}/>
            ))}
        </div>
    );
}

export default About;