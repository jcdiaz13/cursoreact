import {useRef, useState} from 'react';

const App = () => {
    const eurosRef = useRef()
    const [dollars, setDollars] = useState(0)

    const calculate = () => {

        const euros = eurosRef.current.value
        const dollarsAux = euros * 2
        setDollars(dollarsAux)
    }

    return (
        <> 
        <input type="number"  ref={eurosRef}/>
        <button onClick = {calculate}>Calcular</button>
        <p>{dollars}</p>
        </>
    )
}

export default App;