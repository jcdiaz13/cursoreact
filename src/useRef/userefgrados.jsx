import { useRef } from "react";

const App = () => {

    const gradosCent = useRef()
    const gradosFahr = useRef()

    const conversor = () => {
        const centigrados = Number(gradosCent.current.value)
        const fahrenheit = (centigrados * 9/5) +32
        gradosFahr.current.innerHTML =fahrenheit

    }


return (

        <div>
            <input type="text" ref={gradosCent} />
            <button onClick={conversor}>Calcular</button>
            <p ref={gradosFahr}></p>
        </div>
)
}

export default App