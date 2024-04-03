import PLenguage from "./components/programingLenguage.jsx";  //importar componente (siempre empieza con mayúsculas)
import pLenguages from "./data/programing-lenguages.json"     //importar el json, con todos los objetos, en los cuales haremos el map
const App = () => {

    return (
        <div>
            {pLenguages.map((lenguage) => <PLenguage key={lenguage.name} pLenguage={lenguage} />)}
            {/* objeto                      componente                             propiedad */}
        </div>
    );
}

export default App
