import {useState} from "react";
import animalsData from "../database/animals.json";
import AnimalsModal from "./AnimalsModal";
import {useTranslation} from "react-i18next";


function StartingModalChoose(props) {
    const {t} = useTranslation();

    const [modalHelp, setModalHelp] = useState(true);
    const [htmlBodyModal] = useState(`
        <h2>${t("startingModalChooseTitle")}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed Quis mattis risus</p>`);
    const rightButtonModal = {label: t("dailyChallenge"), action: () => setAnimalOfTheDay()};
    const leftButtonModal = {label: t("randomChallenge"), action: () => setAnimalAlea()};

    const setAnimalAlea = () => {
        setModalHelp(false);
        const min = 1;
        const max = Math.max(...animalsData.map(animal => animal.id));
        props.setAnimals(Math.trunc(min + Math.random() * (max - min)))
    }

    const setAnimalOfTheDay = () => {
        setModalHelp(false);
        props.setAnimals(1);
    }

    return (
        <>
            <AnimalsModal
                show={modalHelp}
                htmlbody={htmlBodyModal}
                closebutton={() => setModalHelp(false)}
                leftbutton={leftButtonModal}
                rightbutton={rightButtonModal}/>
        </>
    );
}

export default StartingModalChoose;