import { useRef } from "react";

const App = () => {
    const eurosRef = useRef()
    const dolarsRef = useRef()

    const conversor = () => {
        const euros = eurosRef.current.value;
        dolarsRef.current.innerHTML = euros * 2;

    }

    return (
        <div>
            <input type="text" ref={eurosRef} />
            <button onClick={conversor}>Calcular</button>
            <p ref={dolarsRef}></p>
        </div>
    );
}

export default App