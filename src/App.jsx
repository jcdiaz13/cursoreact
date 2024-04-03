import { useState } from "react";
import Componente1 from "./components/Componente1";
import Componente2 from "./components/Componente2";
import ComponenteContador from "./components/ComponenteContador";

const App = () => {
    const [result, setResult] = useState(0)
    return (
        < div >
            <Componente1 calculate={v => setResult(v)} />
            <Componente2 result={result} />
            {/* {result % 2 == 0 && <p>Par</p>} */}
            {result % 2 == 0 ? <p>Par</p> : <p>Impar</p>}
            <ComponenteContador />
        </div >
    )
}

export default App;