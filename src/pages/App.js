import './css/App.scss';
import Header from "../components/Header";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import HousingSheet from "./HousingSheet";
import Error404 from "./Error404";
import Footer from "../components/Footer";
import React from "react";

function App() {
    return (
        <Router>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/sheets/:id" element={<HousingSheet />} />
                <Route path="*" element={<Error404 />} />
            </Routes>

            <Footer />
        </Router>
    );
}

export default App;