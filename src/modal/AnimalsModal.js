import {Button, Modal} from "react-bootstrap";
import './AnimalsModal.css';
import logoZoodle from "../ressources/logoZoodle.png";

function AnimalsModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.title ? (props.title) : (<img src={logoZoodle} className="App-logo" alt="logo"/>)}
                </Modal.Title>
                <button type="button" className="btn-close" aria-label="Close" onClick={props.closebutton}/>
            </Modal.Header>

            <Modal.Body>
                {props.htmlbody && <div className="content" dangerouslySetInnerHTML={{__html: props.htmlbody}}/>}
            </Modal.Body>

            <Modal.Footer>
                {props.leftbutton && <Button onClick={props.leftbutton.action} className="leftButton">{props.leftbutton.label}</Button>}
                <div className="middleButton"/>
                {props.rightbutton && <Button onClick={props.rightbutton.action} className="rightButton">{props.rightbutton.label}</Button>}
            </Modal.Footer>
        </Modal>
    );
}

export default AnimalsModal;
