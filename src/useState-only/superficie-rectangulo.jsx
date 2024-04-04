import { useState } from 'react';

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
            <button onClick={calcular} >Enviar </button>
            {/* <button onClick={() => calcular()} >Enviar </button> LLAMAR A LA FUNCIÓN CON PARÁMETROS*/}
            <p>{superficie}</p>
        </div>
    );
}
export default App;
