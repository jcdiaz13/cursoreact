// 3. Calcular la superficie de un rectángulo
// Tendremos un formulario que recogerá el ancho y el alto de un rectángulo y calculará su superficie.
import { useState } from "react";
const App = () => {

    const [Altura, setAltura] = useState(0);
    const [Anchura, setAnchura] = useState(0);
    const [superficie, setSuperficie] = useState(0);
    const calcular = () => {
        setSuperficie(Altura * Anchura)
    }
    return (
        <div>
            <input type="text" onChange={e => setAltura(e.target.value)} />
            <input type="text" onChange={e => setAnchura(e.target.value)} />
            <button onClick={calcular}>Calcular</button>
            <p>{superficie}</p>
        </div>
    )
}

export default App;