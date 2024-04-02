import {useRef, useState} from 'react';

const App = () => {
    const centigradosRef = useRef()
    const [fahrenheit, setFahrenheit] = useState(0)

    const calculate = () => {

        const centigrados = centigradosRef.current.value
        const dollarsAux = centigrados * (9/5) + 32
        setFahrenheit(dollarsAux)
    }

    return (
        <>
    <input type="number" placeholder='Grados Centígrados' ref={centigradosRef}/>
    <button onClick={calculate}>Calcular</button>
    <p>${fahrenheit}</p>
    </>
    )
}

export default App;