import React, {useState} from 'react';
import "./AnimalsBar.css";
import animalsData from "../database/animals.json";
import AnimalsTab from "../showData/AnimalsTab";
import {useTranslation} from 'react-i18next';

const AnimalsBar = (props) => {
    const {t} = useTranslation();
    const [name, setName] = useState("");
    const [historicalAnimals, setHistoricalAnimals] = useState([]);
    const [cpt, setCpt] = useState(0);
    const [placeHolderSearch, setPlaceHolderSearch] = useState(t("tryOutOf", {cp: cpt}));

    const handleSubmit = () => {
        const animalsFilter = animalsData.filter(animal => filterAnimalByNameEquals(animal, name));
        if (animalsFilter.length !== 0) {
            const animal = animalsFilter[0];
            setHistoricalAnimals([...historicalAnimals, animal]);

            setCpt(cpt + 1);
            setPlaceHolderSearch(t("tryOutOf", {cp: cpt+1}));
        }
    }

    return (
        <div className="animalsBar">
            <h2>{t("findAnimalTitle")}</h2>
            <label>{t("enterAnimalName")}Entrer le nom d'un animal... </label>
            <br/>
            <input placeholder={placeHolderSearch} type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <br/>
            <input value={t('submitAnimal')} type="submit" onClick={handleSubmit}/>
            <AnimalsTab animals={historicalAnimals} selectedAnimalId={props.selectedAnimalId}/>
        </div>
    );
}

/*
    const [searchInput, setSearchInput] = useState("");


<h2>Filter search</h2>
            <input
                type="text"
                placeholder="Search here"
                onChange={event => setSearchInput(event.target.value)}
                value={searchInput}/>
            <AnimalsTab animals={animalsData.filter(animal => filterAnimalByName(animal, searchInput))}/>


const filterAnimalByName = (animal, searchInput) => {
    if (searchInput === '') {
        return false;
    } else if (animal.name.toLowerCase().includes(searchInput.toLowerCase())) {
        return animal;
    }
} */

const filterAnimalByNameEquals = (animal, searchInput) => {
    if (searchInput === '') {
        return false;
    } else if (animal.name.toLowerCase() === searchInput.toLowerCase()) {
        return animal;
    }
}

export default AnimalsBar;