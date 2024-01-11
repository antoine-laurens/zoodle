import React from 'react'
import animalsData from "../database/animals.json"
import AnimalsTab from "./AnimalsTab";

const SelectedAnimal = (selectedAnimalId) => {

    return (
        <div>
            <h2>Random Animal</h2>
            <AnimalsTab animals={animalsData.filter(animal => animal.id === selectedAnimalId.selectedAnimalId)}/>

        </div>
    );
};



export default SelectedAnimal;
