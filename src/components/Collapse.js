import './css/Collapse.scss';
import {useState} from "react";
import arrowCollapseTop from "../assets/arrow-collapse-top.svg";

function Collapse({title, description, isExpend = false}) {
    const [isExpendState, setIsExpendState] = useState(isExpend);

    return (
        <div className={isExpendState ? "collapse flex column open" : "collapse flex column"}>
            <div className="title flex row space-between align-center">
                <h3 className="font-normal">{title}</h3>
                <img src={arrowCollapseTop} alt="Open / close collapse" onClick={() => setIsExpendState(!isExpendState)}/>
            </div>
            <div className="text">
                <p className="font-normal">{description}</p>
            </div>
        </div>
    );
}

export default Collapse;