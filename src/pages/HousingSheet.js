import './css/HousingSheet.scss';
import Carrousel from "../components/Carrousel";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

function HousingSheet() {
    const [jsonData, setJsonData] = useState([]);
    const { pageId } = useParams();

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('http://localhost:3000/apidata/data.json');
                const data = await res.json();

                data.forEach(e => {
                    if (e.id === pageId) {
                        setJsonData(e);
                    }
                })
            }
            catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            {
                jsonData.title ? (
                    <div className='housing-sheet'>
                        <Carrousel itemImages={jsonData.pictures} />

                        <div className="flex row space-between align-center">
                            <div className="title">
                                <h1>{jsonData.title}</h1>
                                <span>{jsonData.location}</span>
                            </div>

                            <div className="profil flex align-center">
                                <div className="flex column">
                                    <span className="font-normal">{jsonData.host.name.split(' ')[0]}</span>
                                    <span className="font-normal">{jsonData.host.name.split(' ')[1]}</span>
                                </div>
                                <img src={jsonData.host.picture} alt={jsonData.host.name} />
                            </div>
                        </div>
                    </div>
                ) : null
            }
        </div>
    );
}

export default HousingSheet;