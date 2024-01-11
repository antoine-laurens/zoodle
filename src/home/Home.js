import AnimalsBar from "../animalsBar/AnimalsBar";
import {useState} from "react";
import Header from "../header/Header";
import StartingModalChoose from "../modal/StartingModalChoose";

function Home() {
    const [idSelected, setIdSelected] = useState(0);

    return (
        <div>
            <StartingModalChoose setAnimals={setIdSelected}/>

            <Header/>

            <AnimalsBar selectedAnimalId={idSelected}/>
        </div>
    );
}

/* Before for production
<StartingModalChoose setAnimals={setIdSelected}/>
<Header/>
<h1>Animaux vertébrés</h1>
<ShowData/>

<SelectedAnimal selectedAnimalId={idSelected}/>

<AnimalsBar selectedAnimalId={idSelected}/>
 */

export default Home;
