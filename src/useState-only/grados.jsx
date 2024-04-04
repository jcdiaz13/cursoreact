import { useState } from 'react';

const App = () => {
    const [fahrenheit, setFahrenheit] = useState(0);

    const calcular = e => {
        const centigradosValue = e.target.value;
        setFahrenheit(centigradosValue * (9 / 5) + 32);
    }

    return (
        <div>
            <input type="number" onChange={calcular} />
            <p>{fahrenheit}</p>
        </div>
    );
};

export default App;
