import './App.css';
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from "./home/Home";
import ShowData from "./showData/ShowData";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="showData" element={<ShowData />} />
            </Routes>
        </div>
    );
}

export default App;
