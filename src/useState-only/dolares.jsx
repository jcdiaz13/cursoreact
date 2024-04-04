import { useState } from 'react';

const App = () => {
    const [dollars, setDollars] = useState(0);

    const calcular = e => {
        const eurosValue = e.target.value;
        setDollars(eurosValue * 2);
    }

    return (
        <div>
            <input type="number" onChange={calcular} />
            <p>{dollars}</p>
        </div>
    );
};

export default App;
