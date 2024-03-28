import { useState } from "react";

const Dolares = () => {
    const [v, setV] = useState(1);
    const [v2, setV2] = useState(1)

    const hacerCosas = () => {
        setV(v + 1);
    }

    const hacerCosas2 = () => {
        setV2(v2 + 1);
    }
    const result = 800 * v
    return (
        <div>
            <button onClick={hacerCosas}>Pulsar</button>
            <button onClick={hacerCosas2}>Pulsar</button>
            {v}-{v2}

            {result}
        </div>
    )
}

export default Dolares