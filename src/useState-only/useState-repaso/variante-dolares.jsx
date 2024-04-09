// 1. Euros a dólares
// Hay que realizar un conversor de euros a dólares.Supondremos que un euro son dos dólares.El usuario introducirá un valor en euros y se mostrará un mensaje en pantalla con el correspondiente valor en dólares.
import { useState } from "react";

const App = () => {

    const [value, setDouble] = useState(0)

    const calculate = (e) => {
        const value = e.target.value
        setDouble(value * 2)

    }

    return (
        <div>
            <input type="number" onChange={calculate} />
            <p>{value}</p>
        </div>


    )
}

export default App;