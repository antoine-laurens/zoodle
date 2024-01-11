import {Button, Modal} from "react-bootstrap";
import './AnimalsModal.css';
import logoParameter from "../ressources/logoParametre.png";
import i18next from "i18next";

function ParameterModal(props) {
    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    <img src={logoParameter} className="buttonModal" alt="parameter"/> Paramètres
                </Modal.Title>
                <button type="button" className="btn-close" aria-label="Close" onClick={props.closebutton}/>
            </Modal.Header>

            <Modal.Body>
                <h4>Paramètres</h4>
                <p>
                    Lorem Ipsum ras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam.
                </p>
                <h5>Langues</h5>
                <div>
                    <Button onClick={() => i18next.changeLanguage('fr')}>Français</Button>
                    <Button onClick={() => i18next.changeLanguage('en')}>English</Button>
                    <Button onClick={() => i18next.changeLanguage('es')}>Español</Button>
                    <Button onClick={() => i18next.changeLanguage('it')}>Italiano</Button>
                </div>
            </Modal.Body>

        </Modal>
    );
}

export default ParameterModal;
