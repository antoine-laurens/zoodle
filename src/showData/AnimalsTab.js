import React from 'react'
import animalsData from "../database/animals.json";
import animalsProperties from "../database/animalsProperties.json";
import {Table} from "react-bootstrap";

const AnimalsTab = (props) => {
    const selectedAnimal = animalsData.filter(animal => animal.id === props.selectedAnimalId)[0];

    return (
        <div>
            {
                props.animals.length > 0 &&
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        {
                            animalsProperties.map(property => (
                                <th>{property}</th>
                            ))
                        }
                    </tr>
                    </thead>
                    <tbody>
                    {
                        props.animals.map(animal => (
                            <tr key={animal.id}>
                                {
                                    animalsProperties.map(property => (
                                        <td style={SetBackgroundColor(animal, selectedAnimal, property)}>{animal[property]}</td>
                                    ))
                                }
                            </tr>
                        ))
                    }
                    </tbody>
                </Table>
            }
        </div>
    );
};

const SetBackgroundColor = (animal, selectedAnimal, field) => {
    if (selectedAnimal !== undefined && animal[field] === selectedAnimal[field]) {
        return {backgroundColor: "green"}
    }
}

export default AnimalsTab;
