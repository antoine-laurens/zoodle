import animalsData from "../database/animals.json";
import React from 'react';
import AnimalsTab from "./AnimalsTab";
import {Link} from "react-router-dom";

const ShowData = () => {

    return (
        <div>
            <h2>Data</h2>
            <AnimalsTab animals={animalsData}/>
            <button>
                <Link to="/showData">Show Data</Link>
            </button>

        </div>
    );
};

export default ShowData;