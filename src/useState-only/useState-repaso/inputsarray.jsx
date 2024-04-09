import { useState } from "react";


const App = () => {

    // let newInput = inputNumbers.map(newInput => newInput + newInput);

    // const calcularFahrenheit = () => {
    //     const resultado = userInput * (9 / 5) + 32;
    //     setResultadoFahrenheit(resultado);
    // }

    // const handleKeyPress = (e) => {
    //     if (e.key === 'Enter') {
    //         calcularFahrenheit();
    //     }
    // }
    const inputNumbers = Array(userInput)
    const [userInput, setUserInput] = useState(0);

    const updateInput = (e) => {
        setUserInput(Number(e.target.value));
    }

    return (
        <>


            {[...Array(inputNumbers)].map(() => (
            ))}

            <input type="number" value={userInput} onChange={updateInput} />
            <p>{userInput}</p>
            {/* <button onClick={calcularFahrenheit}>Calcular</button> */}
        </>
    );
}

export default App;