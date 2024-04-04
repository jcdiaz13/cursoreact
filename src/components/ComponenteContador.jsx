import { useState } from 'react'

const ComponenteContador = () => {
    const [v, setV] = useState(0)

    return (
        <div>
            <button onClick={() => setV(v - 1)}>-</button>
            <input type="number" value={v} onChange={e => setV(e.target.value)} />
            <button onClick={() => setV(Number(v) + 1)}>+</button>
        </div>
    )
}

export default ComponenteContador