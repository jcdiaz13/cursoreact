
// 2. Grados centígrados

// Hay que realizar un conversor de grados Centígrados a grados Fahrenheit.

// Para ello deberé multiplicar por 9 / 5 y sumar 32. Como todo el mundo sabe, 20 grados centígrados son 68 grados Farenheit.

import { useState } from "react";

const App = () => {
    const [gradosCelsius, setGradosCelsius] = useState(0); // Estado para los grados Celsius
    const [resultadoFahrenheit, setResultadoFahrenheit] = useState(0); // Estado para los grados Fahrenheit

    const updateInput = (e) => {
        setGradosCelsius(e.target.value); // Actualiza el estado de Celsius cuando cambia el input
    }

    const calcularFahrenheit = () => {
        const resultado = gradosCelsius * (9 / 5) + 32;
        setResultadoFahrenheit(resultado);
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            calcularFahrenheit();
        }
    }

    return (
        <>
            <input type="number" value={gradosCelsius} onChange={updateInput} onKeyPress={handleKeyPress} />
            <p>{resultadoFahrenheit}</p>
            <button onClick={calcularFahrenheit}>Calcular</button>
        </>
    );
}

export default App;

