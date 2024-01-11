import './Header.css';
import logoZoodle from '../ressources/logoZoodle.png';
import logoInterrogation from '../ressources/logoInterrogation.png';
import logoParameter from '../ressources/logoParametre.png';
import logoPeople from '../ressources/logoPeople.png';

import {useState} from "react";
import {Button} from "react-bootstrap";
import AnimalsModal from "../modal/AnimalsModal";
import ParameterModal from "../modal/ParameterModal";

function Header() {
    const [showModal, setShowModal] = useState(false);
    const [showParameterModal, setShowParameterModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [htmlBodyModal, setHtmlBodyModal] = useState("");
    const [rightButtonModal, setRightButtonModal] = useState("");

    const clickModalHelp = () => {
        setModalTitle("Help");
        setShowModal(true);

        setHtmlBodyModal(`
            <h4>Help Modal</h4>
            <p>
                Lorem Ipsum ras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros.
            </p>`);
        setRightButtonModal({"label": "Close", "action": () => setShowModal(false)});
    }

    const clickModalParameter = () => {
        setShowParameterModal(true);
    }

    const clickModalPeople = () => {
        setModalTitle("People");
        setShowModal(true);

        setHtmlBodyModal(`
            <h4>People Modal</h4>
            <p>
                Lorem Ipsum ras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros.
            </p>`);
        setRightButtonModal({"label": "Close", "action": () => setShowModal(false)});
    }

    return (
        <div className="header">
            <img src={logoZoodle} className="App-logo" alt="logo"/>

            <Button onClick={() => clickModalPeople()}>
                <img src={logoPeople} className="buttonModal" alt="people"/>
            </Button>

            <Button onClick={() => clickModalParameter()}>
                <img src={logoParameter} className="buttonModal" alt="parameter"/>
            </Button>

            <Button onClick={() => clickModalHelp()}>
                <img src={logoInterrogation} className="buttonModal" alt="help"/>
            </Button>

            <AnimalsModal
                show={showModal}
                title={modalTitle}
                htmlbody={htmlBodyModal}
                closebutton={() => setShowModal(false)}
                rightbutton={rightButtonModal}/>
            <ParameterModal
                show={showParameterModal}
                closebutton={() => setShowParameterModal(false)}
                />

        </div>
    );
}

export default Header;
