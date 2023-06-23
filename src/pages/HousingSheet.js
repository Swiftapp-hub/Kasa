import './css/HousingSheet.scss';
import Carrousel from "../components/Carrousel";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Error404 from "./Error404";
import star from "../assets/star.svg";
import starRed from "../assets/star-red.svg";
import Collapse from "../components/Collapse";

function HousingSheet() {
    const [jsonData, setJsonData] = useState([]);
    const [isExist, setIsExist] = useState(true);
    const {pageId} = useParams();

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('http://localhost:3000/apidata/data.json');
                const data = await res.json();

                if (!data.some(e => e.id === pageId)) setIsExist(false);

                data.forEach(e => {
                    if (e.id === pageId) {
                        setJsonData(e);
                    }
                })
            } catch (err) {
                console.log(err);
            }
        }

        fetchData();
    }, [pageId]);

    if (isExist === false) {
        return (
            <Error404/>
        )
    }

    return (
        <div>
            {
                jsonData.title ? (
                    <div className='housing-sheet'>
                        <Carrousel itemImages={jsonData.pictures}/>

                        <div className="head-sheet flex row space-between">
                            <div className="titles flex column space-between">
                                <div className="flex column">
                                    <h1 className="font-title">{jsonData.title}</h1>
                                    <span className="font-normal">{jsonData.location}</span>
                                </div>

                                <div className="tags flex row">
                                    {jsonData.tags.map((tag, index) => (
                                        <span className="font-small" key={index}>{tag}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="profil flex column align-end space-between">
                                <div className="info flex row align-center">
                                    <div className="flex column align-end">
                                        <span className="font-normal">{jsonData.host.name.split(' ')[0]}</span>
                                        <span className="font-normal">{jsonData.host.name.split(' ')[1]}</span>
                                    </div>
                                    <img src={jsonData.host.picture} alt={jsonData.host.name}/>
                                </div>

                                <div className="rating flex row">
                                    <img src={jsonData.rating >= 1 ? starRed : star} alt=""/>
                                    <img src={jsonData.rating >= 2 ? starRed : star} alt=""/>
                                    <img src={jsonData.rating >= 3 ? starRed : star} alt=""/>
                                    <img src={jsonData.rating >= 4 ? starRed : star} alt=""/>
                                    <img src={jsonData.rating >= 5 ? starRed : star} alt=""/>
                                </div>
                            </div>
                        </div>

                        <div className="description">
                            <Collapse title="Description" description={jsonData.description}/>
                            <Collapse title="Équipements" description={jsonData.equipments.join('\n')}/>
                        </div>
                    </div>
                ) : null
            }
        </div>
    );
}

export default HousingSheet;