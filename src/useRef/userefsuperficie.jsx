import { useRef } from "react";

const App = () => {
    const anchoRectangulo = useRef();
    const altoRectangulo = useRef();
    const superficieRectangulo = useRef();
    
    const calcular = () => {
        const ancho = Number(anchoRectangulo.current.value);
        const altura = Number(altoRectangulo.current.value);   
        const superficie = ancho * altura; // Multiplica ancho por altura para obtener la superficie
        superficieRectangulo.current.innerHTML = superficie; // Muestra la superficie en el elemento <p>
    };
    
    return (
        <div>
            <input type="number" placeholder="alto" ref={altoRectangulo} />
            <input type="number" placeholder="ancho" ref={anchoRectangulo} /> {/* Añade un segundo input para el alto */}
            <button onClick={calcular}>Calcular</button>
            <p ref={superficieRectangulo}></p>
        </div>
    );
};

export default App;
